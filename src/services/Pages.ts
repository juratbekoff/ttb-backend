import { PrismaClient } from "@prisma/client";
import { pages } from "../types";

const client = new PrismaClient();

class Pages {
  create = async (data: pages) => {
    return await client.pages.create({
      data: {
        name: data.name,
        title: data.title,
        content: data.content,
      },
    });
  };

  getAll = async () => await client.pages.findMany();

  getOne = async (id: number) =>
    await client.pages.findUnique({ where: { id } });

  getByName = async (name: string) =>
    await client.pages.findUnique({ where: { name } });

  deleteOne = async (id: number) => {
    return await client.pages.delete({
      where: {
        id,
      },
    });
  };

  deleteAll = async () => await client.pages.deleteMany();

  update = async (id: number, data: pages) => {
    return await client.pages.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        content: data.content,
      },
    });
  };
}

export default Pages;
