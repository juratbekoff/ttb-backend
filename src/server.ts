import express from "express";
import { serverConfig } from "./configs";
import router from "./routes";
import { bot } from "./bot/config/bot";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(cors());

app.use(morgan("combined"));
app.use("/api", router);

bot.start({
  onStart(botInfo) {
    console.log(`https://t.me/${botInfo.username} has been started`);
  }
})

app.listen(serverConfig.port, () => {
  serverConfig.info();
});
