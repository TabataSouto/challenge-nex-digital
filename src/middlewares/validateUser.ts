import { NextFunction, Request, Response } from "express";
import usersController from "../controllers/usersController";
import configKnex from "../database/db";

const validateUser = async (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const { email } = request.body;

  if (email) {
    const user = await configKnex("users").where({ email }).first();
    user
      ? next({
          status: 409,
          message: "Usuário já cadastrado, informe outro e-mail.",
        })
      : next();
  } else {
    next();
  }
};

export default validateUser;
