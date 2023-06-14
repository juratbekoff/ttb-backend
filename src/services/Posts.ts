import { PrismaClient } from "@prisma/client";
import { posts } from "../types";

const client = new PrismaClient();

class Posts {
  create = async (data: posts, image: string) => {
    return await client.posts.create({
      data: {
        title: data.title,
        descr: data.descr,
        image,
      },
    });
  };

  getAll = async () => await client.posts.findMany();

  getOne = async (id: number) =>
    await client.posts.findUnique({ where: { id } });

  getByLimit = async (limit: number) => {
    return await client.posts.findMany({
      take: limit,
    });
  };

  getByImage = async (image: string) => {
    return await client.posts.findFirst({
      where: {
        image,
      },
    });
  };

  deleteOne = async (id: number) => {
    return await client.posts.delete({
      where: {
        id,
      },
    });
  };

  deleteAll = async () => await client.posts.deleteMany();

  update = async (id: number, data: posts) => {
    return await client.posts.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        descr: data.descr,
      },
    });
  };
}

export default Posts;
