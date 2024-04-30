import {adminService} from "../services";
import {Router} from "express";
import {admin} from "../types";
import {generateToken, tokenFormation} from "../utils";
import {log} from "console";
import {login, register} from "../schemas";
import {body} from "@verve-neowise/express-validius";

const adminRouter = Router();

// register
adminRouter.post("/register", body(register), async (req, res) => {
  try {
    let data: admin = req.body;
    let admin = await adminService.findByUsername(data.username);
    if (admin) {
      return res.status(400).json({
        message: `admin with username ${data.username} is already registered`,
      });
    }
    let createUser = await adminService.register(data);
    let token = generateToken(data);
    res.status(201).json({
      message: `Admin created!`,
      token,
      data: {
        id: createUser.id,
        username: data.username,
      },
    });
  } catch (error) {
    log(error);
  }
});

// login
adminRouter.post("/login", body(login), async (req, res) => {
  try {
    let { username, password } = req.body;
    let admin = await adminService.findByUsername(username);
    if (!admin || admin.password !== password) {
      return res.status(404).json({
        message: `username or password is wrong!`,
      });
    }
    let token = generateToken(admin);
    // updating user details wtih token // re-login
    await adminService.updateByToken(admin.id, token);

    res.status(200).json({
      message: `Successfully logged In!`,
      token,
    });
  } catch (error) {
    log(error);
  }
});

// logout
adminRouter.post("/logout", async (req, res) => {
  try {
    let token = tokenFormation(req.header("authorization"));
    if (!token) {
      return res.status(401).json({
        message: `token is not provided!`,
      });
    }
    await adminService.logOut(token);
    res.status(200).json({
      message: `Logged Out!`,
      token: null,
    });
  } catch (error) {
    log(error);
  }
});

// delete /:id
adminRouter.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Plz, use ID in params!",
      });
    }
    let admin = await adminService.findById(+id);
    if (!admin) {
      return res.status(404).json({
        message: `Admin is not found!`,
      });
    }
    let deletingAdmin = await adminService.deleteOne(+id);
    res.status(200).json({
      message: `Admin deleted!`,
      deletedAdminID: deletingAdmin.id,
    });
  } catch (error) {
    log(error);
  }
});

// update /:id
adminRouter.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data: admin = req.body;
    let updating = await adminService.update(+id, data);
    res.status(200).json({
      message: `Admin details updated!`,
      data: updating,
    });
  } catch (error) {
    log(error);
  }
});

export default adminRouter;
