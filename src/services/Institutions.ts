import { PrismaClient } from "@prisma/client";
import { institutions } from "../types";

const client = new PrismaClient();

class Institutions {
  create = async (data: institutions, image: string) => {
    return await client.institutions.create({
      data: {
        title: data.title,
        descr: data.descr,
        image,
      },
    });
  };

  getAll = async () => await client.institutions.findMany();

  getOne = async (id: number) =>
    await client.institutions.findUnique({ where: { id } });

  getByImage = async (image: string) => {
    return await client.institutions.findFirst({
      where: {
        image,
      },
    });
  };

  deleteOne = async (id: number) => {
    return await client.institutions.delete({
      where: {
        id,
      },
    });
  };

  deleteAll = async () => await client.institutions.deleteMany();

  update = async (id: number, data: institutions) => {
    return await client.institutions.update({
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

export default Institutions;
