import { applicationService } from "../services";
import { Router } from "express";
import { applications } from "../types";
import { log } from "console";
import { appValidator } from "../schemas";
import { body } from "@verve-neowise/express-validius";
import { bot } from "../bot/config/bot";
import { appMessage } from "../utils/msgs";

const applications = Router();

// submit | create
applications.post("/", body(appValidator), async (req, res) => {
  try {
    let data: applications = req.body;
    await applicationService.create(data);
    bot.api.sendMessage("@urganchttb_uz", appMessage(data), {
      parse_mode: "HTML",
    });
    res.status(201).json({
      message: `Applciation submitted successfully!`,
    });
  } catch (error) {
    log(error);
  }
});

// get all
applications.get("/", async (req, res) => {
  try {
    let getApplications = await applicationService.getAll();
    res.status(200).json({
      message: `All applications!`,
      data: getApplications,
    });
  } catch (error) {
    log(error);
  }
});

// get by ID
applications.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let application = await applicationService.getOne(+id);
    if (!application) {
      return res.status(404).json({
        message: `application with ID ${id} is not found!`,
      });
    }
    res.status(200).json({
      message: `ID ${id} application info`,
      data: application,
    });
  } catch (error) {
    log(error);
  }
});

// delete all applications
applications.delete("/", async (req, res) => {
  try {
    let data = await applicationService.getAll();
    if (data.length === 0) {
      return res.status(404).json({
        message: `There is no any application in order to delete!`,
      });
    }
    // deleting all data
    await applicationService.deleteAll();
    res.status(200).json({
      message: `All applications successfully deleted!`,
    });
  } catch (error) {
    log(error);
  }
});

// delete by ID
applications.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let application = await applicationService.deleteOne(+id);
    if (!application) {
      return res.status(404).json({
        message: `Application with ID ${id} is not found! Maybe it is already deleted!`,
      });
    }
    res.status(200).json({
      message: `Application deleted!`,
      deletedData: application,
    });
  } catch (error) {
    log(error);
  }
});

export default applications;
