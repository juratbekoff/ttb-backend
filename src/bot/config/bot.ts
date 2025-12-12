import {
  Bot,
  Context,
  GrammyError,
  HttpError,
  SessionFlavor,
  session,
} from "grammy";
import {
  Conversation,
  conversations,
  type ConversationFlavor,
  createConversation,
} from "@grammyjs/conversations";
import { submitForm } from "../conversations/submitForm";
import { onStart } from "../conversations/onStart";

import * as dotenv from "dotenv"

dotenv.config()

interface SessionData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}

type MyContext = Context & SessionFlavor<SessionData> & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const bot = new Bot<MyContext>(
  process.env.BOT_TOKEN!
);

bot.use(
  session({
    initial: () => ({}),
  })
);

bot.use(conversations());

bot.use(createConversation(submitForm));
bot.use(createConversation(onStart));

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});

bot.command("start", async (ctx) => {
  await ctx.conversation.enter("onStart");
});

bot.hears(
  ["Ariza yuborish"],
  async (ctx) => await ctx.conversation.enter("submitForm")
);

export { MyContext, bot, MyConversation };
