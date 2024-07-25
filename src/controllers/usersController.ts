import { NextFunction, Request, Response } from "express";
import configKnex from "../database/db";
import encryptedPassword from "../helpers/encryptedpassword";

const usersController = {
  getUser: async (request: Request, response: Response, next: NextFunction) => {
    const { email } = request.body;
    try {
      const user = await configKnex("users").where({ email }).first();
      return response.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return next({
          status: 404,
          message: "Algo deu errado, por favor, tente novamente mais tarde!",
        });
      }
    }
  },

  createUser: async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { password } = request.body;
    try {
      const newPassword = encryptedPassword(password);
      request.body.password = newPassword;
      await configKnex("users").insert(request.body);
      return response
        .status(201)
        .json({ message: "Cadastro realizdo com sucesso!" });
    } catch (error) {
      if (error instanceof Error) {
        return next({
          status: 404,
          message:
            "Não foi possível fazer o cadastro. Por favor, tente novamente mais tarde!",
        });
      }
    }
  },
};

export default usersController;
