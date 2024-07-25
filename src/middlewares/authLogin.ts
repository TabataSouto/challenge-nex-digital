import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import configKnex from "../database/db";

export const authUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email, password } = request.body;
  const user = await configKnex("users").where({ email }).first();

  !user
    ? next({
        statusCode: 404,
        message: `Email não cadastrado`,
      })
    : (await bcrypt.compare(password, user.password))
    ? next()
    : next({
        statusCode: 422,
        message: "Senha inválida",
      });
};

export const authToken = () => {

}