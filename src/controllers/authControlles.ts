import { NextFunction, Request, Response } from "express";
import authServer from "../servers/authServer";

const authController = {
  authLogin: async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { email } = request.body;
    try {
      const token = await authServer.createToken(email);
      return response.status(200).json(token);
    } catch (error) {
      if (error instanceof Error) {
        return next({
          status: 500,
          message:
            "Não foi possível fazer o login. Por favor, tente novamente mais tarde.",
        });
      }
    }
  },
};

export default authController;
