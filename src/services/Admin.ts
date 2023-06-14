import { PrismaClient } from "@prisma/client";
import { admin } from "../types";

const client = new PrismaClient();

class Admin {
  register = async (data: admin) => {
    return await client.admin.create({
      data: {
        name: data.name,
        username: data.username,
        password: data.password,
      },
    });
  };

  findByUsername = async (username: string) => {
    return await client.admin.findUnique({
      where: {
        username,
      },
    });
  };

  findById = async (id: number) => {
    return await client.admin.findUnique({
      where: {
        id,
      },
    });
  };

  getAll = async () => await client.admin.findMany();

  deleteOne = async (id: number) => {
    return await client.admin.delete({
      where: {
        id,
      },
    });
  };

  update = async (id: number, data: admin) => {
    return await client.admin.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        username: data.username,
        password: data.password,
      },
    });
  };
  updateByToken = async (id: number, token: string) => {
    return await client.admin.update({
      where: {
        id,
      },
      data: {
        token,
      },
    });
  };
  logOut = async (token: string) => {
    return await client.admin.update({
      where: {
        token,
      },
      data: {
        token: "INACTIVE",
      },
    });
  };
}

export default Admin;
