import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs";

export const generateToken = (data: Object) => {
  return jwt.sign({ data }, jwtConfig.secret);
};

export const tokenFormation = (token: any) => {
  return String(token.split(" ")[1]);
};
