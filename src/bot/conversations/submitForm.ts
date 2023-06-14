import { MyContext, MyConversation } from "../config/bot";
import { applicationService } from "../../services";

const submitForm = async (conversation: MyConversation, ctx: MyContext) => {
  await ctx.reply("Ismingizni kiriting!");
  const name = (await conversation.wait()).message?.text;
  if (name) {
    ctx.session.name = name;
  }

  // surname
  await ctx.reply("Familiya?");
  const surname = (await conversation.waitFor(":text")).message?.text;
  if (surname) {
    ctx.session.surname = surname;
  }

  // email
  await ctx.reply("Email?");
  const email = (await conversation.waitFor(":text")).message?.text;
  if (email) {
    ctx.session.email = email;
  }

  // phone
  await ctx.reply("Telefon raqam?");
  const phone = (await conversation.waitFor(":text")).message?.text;
  if (phone) {
    ctx.session.phone = phone;
  }

  // message
  await ctx.reply("Xabarni kiriting?");
  const message = (await conversation.waitFor(":text")).message?.text;
  if (message) {
    ctx.session.message = message;
  }

  let data = {
    name: ctx.session.name,
    surname: ctx.session.surname,
    email: ctx.session.email,
    phone: ctx.session.phone,
    message: ctx.session.message,
    sentBy: "TELEGRAM",
  };

  const text = `
  ${data.name}
  ${data.surname}
  ${data.email}
  ${data.phone}
  ${data.message}
    `;

  const msg = await ctx.reply("Yuborilmoqda....");
  let application = await applicationService.create(data);
  await ctx.api.sendMessage("@astix_uz", text);
  await ctx.api.deleteMessage(ctx.chat?.id!, msg.message_id);
  await ctx.reply(`#${application.id}, Arizangiz muvaffaqiyatli yuborildi `);
};

export { submitForm };
