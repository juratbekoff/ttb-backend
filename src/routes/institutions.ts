import { institutionsService } from "../services";
import { Router } from "express";
import { institutions } from "../types";
import { log } from "console";
import { upload } from "../utils";

const institutions = Router();

// create
institutions.post("/", upload.single("image"), async (req, res) => {
  try {
    let data: institutions = req.body;
    let image_file = req.file?.filename;
    if (!data.descr || !data.title || !image_file) {
      return res.status(400).json({
        message: `Fill all the fields!`,
      });
    }
    let institution = await institutionsService.create(data, image_file);
    res.status(201).json({
      message: `Institution created successfully!`,
      data: institution,
    });
  } catch (error) {
    log(error);
  }
});

// get all
institutions.get("/", async (req, res) => {
  try {
    let getInstitutions = await institutionsService.getAll();
    res.status(200).json({
      message: `All institutions!`,
      data: getInstitutions,
    });
  } catch (error) {
    log(error);
  }
});

// get by ID
institutions.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let institution = await institutionsService.getOne(+id);
    if (!institution) {
      return res.status(404).json({
        message: `institution with ID ${id} is not found!`,
      });
    }
    res.status(200).json({
      message: `ID ${id} institution info`,
      data: institution,
    });
  } catch (error) {
    log(error);
  }
});

// get by imageID
institutions.get("/img/:image", async (req, res) => {
  try {
    let { image } = req.params;
    let inst = await institutionsService.getByImage(image);
    if (!inst) {
      return res.status(404).json({
        message: `institution with image ${image} is not found!`,
      });
    }
    let image_file = inst.image;
    res.sendFile(image_file, { root: "public" });
  } catch (error) {
    log(error);
  }
});

// delete all institutions
institutions.delete("/", async (req, res) => {
  try {
    let data = await institutionsService.getAll();
    if (data.length === 0) {
      return res.status(404).json({
        message: `There is no any institution in order to delete!`,
      });
    }
    // deleting all data
    await institutionsService.deleteAll();
    res.status(200).json({
      message: `All institutions successfully deleted!`,
    });
  } catch (error) {
    log(error);
  }
});

// delete by ID
institutions.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let institution = await institutionsService.getOne(+id);
    if (!institution) {
      return res.status(404).json({
        message: `institution with ID ${id} is not found! Maybe it is already deleted!`,
      });
    }
    // deleting
    await institutionsService.deleteOne(+id);
    res.status(200).json({
      message: `institution deleted!`,
      deletedDataID: institution.id,
    });
  } catch (error) {
    log(error);
  }
});

export default institutions;
