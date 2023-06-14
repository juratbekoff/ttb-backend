import { applications } from "../types";

export const appMessage = (data: applications, user?: string) => {
  let msg = `
name: ${data.name};
surname: ${data.surname};
email: ${data.email};
phone: ${data.phone};
message: ${data.message};
sentBy: ${data.sentBy}    

user: @${user || "Aniqlanmagan!"}
    `;

  return msg;
};

export const allCorrect = (data: applications) => {
  let msg = `Barcha ma'lumotlar to'grimi?

ism: ${data.name};
familiya: ${data.surname};
email: ${data.email};
telefon raqam: ${data.phone};
xabar: ${data.message};
  `;

  return msg;
};
