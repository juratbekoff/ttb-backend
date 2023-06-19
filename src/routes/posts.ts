import { postsService } from "../services";
import { Router } from "express";
import { posts } from "../types";
import { log } from "console";
import { upload } from "../utils/";

const posts = Router();

// create
posts.post("/", upload.single("image"), async (req, res) => {
  try {
    let data: posts = req.body;
    let image_file = req.file?.filename;
    if (!data.descr || !data.title || !image_file) {
      return res.status(400).json({
        message: `Fill all the fields!`,
      });
    }
    let post = await postsService.create(data, image_file);
    res.status(201).json({
      message: `posts created successfully!`,
      data: post,
    });
  } catch (error) {
    log(error);
  }
});

// get all
posts.get("/", async (req, res) => {
  try {
    let getposts = await postsService.getAll();
    res.status(200).json({
      message: `All posts!`,
      data: getposts,
    });
  } catch (error) {
    log(error);
  }
});

// get by limit
posts.get("/:limit", async (req, res) => {
  try {
    let { limit } = req.params;

    let getposts = await postsService.getByLimit(+limit);
    res.status(200).json({
      message: `Posts by limit`,
      data: getposts,
    });
  } catch (error) {
    log(error);
  }
});

// get by ID
posts.get("/get/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let post = await postsService.getOne(+id);
    if (!post) {
      return res.status(404).json({
        message: `post with ID ${id} is not found!`,
      });
    }
    res.status(200).json({
      message: `ID ${id} post info`,
      data: post,
    });
  } catch (error) {
    log(error);
  }
});

// get by imageID
posts.get("/img/:image", async (req, res) => {
  try {
    let { image } = req.params;
    let post = await postsService.getByImage(image);
    if (!post) {
      return res.status(404).json({
        message: `post with image ${image} is not found!`,
      });
    }
    let image_file = post.image;
    res.sendFile(image_file, { root: "public" });
  } catch (error) {
    log(error);
  }
});

// delete all posts
posts.delete("/", async (req, res) => {
  try {
    let data = await postsService.getAll();
    if (data.length === 0) {
      return res.status(404).json({
        message: `There is no any post in order to delete!`,
      });
    }
    // deleting all data
    await postsService.deleteAll();
    res.status(200).json({
      message: `All posts successfully deleted!`,
    });
  } catch (error) {
    log(error);
  }
});

// delete by ID
posts.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let post = await postsService.deleteOne(+id);
    if (!post) {
      return res.status(404).json({
        message: `post with ID ${id} is not found! Maybe it is already deleted!`,
      });
    }
    res.status(200).json({
      message: `post deleted!`,
      deletedData: post,
    });
  } catch (error) {
    log(error);
  }
});

// update /:id
posts.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data: posts = req.body;
    let updating = await postsService.update(+id, data);
    res.status(200).json({
      message: `post details updated successfully!`,
      data: updating,
    });
  } catch (error) {
    log(error);
  }
});

export default posts;
