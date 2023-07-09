import { lshService } from "../services";
import { Router } from "express";
import { leadership } from "../types";
import { log } from "console";
import { upload } from "../utils";
import { lshValidatior } from "../schemas";
import { body } from "@verve-neowise/express-validius";

const leadership = Router();

// submit | create
leadership.post(
  "/",
  upload.single("image"),
  body(lshValidatior),
  async (req, res) => {
    try {
      try {
        let data: leadership = req.body;
        let image_file = req.file?.filename;
        if (!image_file) {
          return res.status(400).json({
            message: `Upload image, image file should not be empty`,
          });
        }
        let leadership = await lshService.create(data, image_file);
        res.status(201).json({
          message: `Leader is created successfully!`,
          data: leadership,
        });
      } catch (error) {
        log(error);
      }
    } catch (error) {
      log(error);
    }
  }
);

// get all
leadership.get("/", async (req, res) => {
  try {
    let getleadership = await lshService.getAll();
    res.status(200).json({
      message: `All leaderships!`,
      data: getleadership,
    });
  } catch (error) {
    log(error);
  }
});

// get by ID
leadership.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let leadership = await lshService.getOne(+id);
    if (!leadership) {
      return res.status(404).json({
        message: `leader with ID ${id} is not found!`,
      });
    }

    // leadership.image = `${process.env.API_URL!}/catalogs/img/${
    //   leadership.image
    // }`;

    res.status(200).json({
      message: `ID ${id} leader info`,
      data: leadership,
    });
  } catch (error) {
    log(error);
  }
});

// get by imageID
leadership.get("/img/:image", async (req, res) => {
  try {
    let { image } = req.params;
    let leadership = await lshService.getByImage(image);
    if (!leadership) {
      return res.status(404).json({
        message: `leader with image ${image} is not found!`,
      });
    }
    let image_file = leadership.image;
    res.sendFile(image_file, { root: "public" });
  } catch (error) {
    log(error);
  }
});

// delete all leadership
leadership.delete("/", async (req, res) => {
  try {
    let data = await lshService.getAll();
    if (data.length === 0) {
      return res.status(404).json({
        message: `There is no any leader in order to delete!`,
      });
    }
    // deleting all data
    await lshService.deleteAll();
    res.status(200).json({
      message: `All leadership successfully deleted!`,
    });
  } catch (error) {
    log(error);
  }
});

// delete by ID
leadership.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let leadership = await lshService.getOne(+id);
    if (!leadership) {
      return res.status(404).json({
        message: `leadership with ID ${id} is not found! Maybe it is already deleted!`,
      });
    }
    // delete by ID
    await lshService.deleteOne(+id);
    res.status(200).json({
      message: `leadership deleted!`,
    });
  } catch (error) {
    log(error);
  }
});

export default leadership;
