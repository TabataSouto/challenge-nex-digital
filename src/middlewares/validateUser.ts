import { NextFunction, Request, Response } from "express";
import usersController from "../controllers/usersController";
import configKnex from "../database/db";

const validateUser = async (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const { cpf } = request.body;

  if (cpf) {
    const user = await configKnex("users").where({ cpf }).first();
    user
      ? next({
          status: 409,
          message: "O cpf já está cadastrado",
        })
      : next();
  } else {
    next();
  }
};

export default validateUser;
