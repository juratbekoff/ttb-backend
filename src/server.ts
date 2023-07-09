import express from "express";
import { serverConfig } from "./configs";
import router from "./routes";
import { bot } from "./bot/config/bot";
import morgan from "morgan";
import cors from "cors";

const app = express();
bot;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(cors());

app.use(morgan("combined"));
app.use("/api", router);

app.listen(serverConfig.port, () => {
  serverConfig.info();
});
