export type applications = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
    sentBy?: string;
    telegramId?: number;
};

export type admin = {
    name: string;
    username: string;
    password: string;
};

export type pages = {
    name: string;
    title: string;
    content: string;
};

export type catalogues = {
    title: string;
    descr: string;
};

export type institutions = {
    title: string;
    descr: string;
};

export type posts = {
    title: string;
    image: string;
    descr: string;
};

export type leadership = {
    name: string;
    position: string;
    phone: string;
    email: string;
};

export type open_documents = {
    title: string;
    cover_image: string;
    file_url: string;
    file_size: string;
    downloads_count?: number;
}