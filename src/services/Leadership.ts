import { PrismaClient } from "@prisma/client";
import { leadership } from "../types";

const client = new PrismaClient();

class Leadership {
  create = async (data: leadership, image_file: string) => {
    return await client.leadership.create({
      data: {
        name: data.name,
        position: data.position,
        image: image_file,
        email: data.email,
        phone: data.phone,
      },
    });
  };

  getAll = async () => await client.leadership.findMany();

  getCount = async () => {
    return await client.leadership.count();
  };

  getByImage = async (image: string) => {
    return await client.leadership.findFirst({
      where: {
        image,
      },
    });
  };

  getOne = async (id: number) => {
    return await client.leadership.findUnique({ where: { id } });
  };

  deleteOne = async (id: number) => {
    return await client.leadership.delete({ where: { id } });
  };

  deleteAll = async () => await client.leadership.deleteMany();
}

export default Leadership;
