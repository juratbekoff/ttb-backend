import express from "express";
import cors from "cors";
import { serverConfig } from "./configs";
import router from "./routes";
import { bot } from "./bot/config/bot";
import morgan from "morgan";

const app = express();

bot;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("public"));

app.use(morgan("combined"));
app.use("/api", router);

app.listen(serverConfig.port, () => {
  serverConfig.info();
});
