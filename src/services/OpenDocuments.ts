import {PrismaClient} from "@prisma/client";
import {open_documents} from "../types";

const client = new PrismaClient();

class OpenDocuments {
    create = async (data: open_documents) => {
        return await client.openDocuments.create({
            data
        })
    }

    findById = async (id: number) => {
        return await client.openDocuments.findUnique({
            where: {
                id
            }
        })
    }

    findByImage = async (image_url: string) => {
        return await client.openDocuments.findFirst({
            where: {
                cover_image: image_url
            }
        })
    }

    findByFile = async (file_url: string) => {
        return await client.openDocuments.findFirst({
            where: {
                file_url
            }
        })
    }

    getAll = async () => {
        return await client.openDocuments.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
    }

    getCount = async () => {
        return await client.openDocuments.count();
    }

    delete = async (id: number) => {
        return await client.openDocuments.delete({
            where: {
                id
            }
        })
    }
}

export default OpenDocuments;
