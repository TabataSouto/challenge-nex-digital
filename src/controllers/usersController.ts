import { NextFunction, Request, Response } from "express";
import configKnex from "../database/db";
import usersServer from "../servers/usersServer";

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
    try {
      const message = await usersServer.createUser(request.body);
      return response.status(201).json(message);
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
