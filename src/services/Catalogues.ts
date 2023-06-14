import { PrismaClient } from "@prisma/client";
import { catalogues } from "../types";

const client = new PrismaClient();

class Catalogues {
  create = async (data: catalogues, image: string) => {
    return await client.catalogues.create({
      data: {
        title: data.title,
        descr: data.descr,
        image,
      },
    });
  };

  getAll = async () => await client.catalogues.findMany();

  getOne = async (id: number) =>
    await client.catalogues.findUnique({ where: { id } });

  getByImage = async (image: string) => {
    return await client.catalogues.findFirst({
      where: {
        image,
      },
    });
  };
  deleteOne = async (id: number) => {
    return await client.catalogues.delete({
      where: {
        id,
      },
    });
  };

  deleteAll = async () => await client.catalogues.deleteMany();

  update = async (id: number, data: catalogues, image: string) => {
    return await client.catalogues.update({
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

export default Catalogues;
