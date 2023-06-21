import { applications } from "../types";

export const appMessage = (data: applications, user?: string) => {
  let msg = `<code>👤Ism-familiya: </code><b>${data.name} ${data.surname}</b>
<code>📥 Email: </code><b>${data.email}</b>
<code>📞 Telefon raqam: </code><b>${data.phone}</b>
<code>🔖 Xabar: </code><b>${data.message}</b>
<code>🌐 Platforma: </code><b>${data.sentBy ? data.sentBy : "WEBSITE"}</b>`;
  return msg;
};
