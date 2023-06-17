import { PrismaClient } from "@prisma/client";
import { applications } from "../types";

const client = new PrismaClient();

class Application {
  create = async (data: applications) => {
    return await client.applications.create({
      data: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        message: data.message,
        sentBy: data.sentBy,
      },
    });
  };

  getAll = async () => await client.applications.findMany();

  getCount = async () => {
    return await client.applications.count()
  }

  getOne = async (id: number) => {
    return await client.applications.findUnique({ where: { id } });
  };

  deleteOne = async (id: number) => {
    return await client.applications.delete({ where: { id } });
  };

  deleteAll = async () => await client.applications.deleteMany();
}

export default Application;
