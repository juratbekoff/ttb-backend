import { pagesService } from "../services";
import { Router } from "express";
import { pages } from "../types";
import { log } from "console";
import { pagesValidator } from "../schemas";
import { body } from "@verve-neowise/express-validius";

const pages = Router();

// create
pages.post("/", body(pagesValidator), async (req, res) => {
  try {
    let data: pages = req.body;
    let findTitle = await pagesService.getByName(data.name);
    if (findTitle) {
      return res.status(400).json({
        message: `${data.name} is already used and exicted! plz, use another name!`,
      });
    }
    let page = await pagesService.create(data);
    res.status(201).json({
      message: `Pages created successfully!`,
      data: page,
    });
  } catch (error) {
    log(error);
  }
});

// get all
pages.get("/", async (req, res) => {
  try {
    let getPages = await pagesService.getAll();
    res.status(200).json({
      message: `All pages!`,
      data: getPages,
    });
  } catch (error) {
    log(error);
  }
});

// get by ID
pages.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let page = await pagesService.getOne(+id);
    if (!page) {
      return res.status(404).json({
        message: `page with ID ${id} is not found!`,
      });
    }
    res.status(200).json({
      message: `ID ${id} page info`,
      data: page,
    });
  } catch (error) {
    log(error);
  }
});

// delete all pages
pages.delete("/", async (req, res) => {
  try {
    let data = await pagesService.getAll();
    if (data.length === 0) {
      return res.status(404).json({
        message: `There is no any page in order to delete!`,
      });
    }
    // deleting all data
    await pagesService.deleteAll();
    res.status(200).json({
      message: `All pages successfully deleted!`,
    });
  } catch (error) {
    log(error);
  }
});

// delete by ID
pages.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let page = await pagesService.getOne(+id);
    if (!page) {
      return res.status(404).json({
        message: `page with ID ${id} is not found! Maybe it is already deleted!`,
      });
    }
    // deleting
    await pagesService.deleteOne(+id);
    res.status(200).json({
      message: `page deleted!`,
      deletedData: page,
    });
  } catch (error) {
    log(error);
  }
});

// update /:id
pages.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data: pages = req.body;
    let updating = await pagesService.update(+id, data);
    res.status(200).json({
      message: `page details updated successfully!`,
      data: updating,
    });
  } catch (error) {
    log(error);
  }
});

export default pages;
