import { MyContext, MyConversation } from "../config/bot";
import { Keyboard } from "grammy";

const keyboards = new Keyboard().text("Ariza yuborish").resized();

const onStart = async (conversation: MyConversation, ctx: MyContext) => {
  await ctx.reply(
    "Xush kelibsiz! Ushbu bot orqali bizga ariza yuborishingiz mumkin!",
    { reply_markup: keyboards }
  );
};

export { onStart };
