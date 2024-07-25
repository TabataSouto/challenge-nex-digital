import { NextFunction, Request, Response } from "express";
import adminServer from "../servers/adminServer";

const adminController = {
  upload: async (request: Request, response: Response, next: NextFunction) => {
    try {
      await adminServer.upload(request.file!);
      return response
        .status(201)
        .json({ message: "Informações de transação salvas com sucesso!" });
    } catch (error) {
      if (error instanceof Error) {
        return next({
          status: 500,
          message:
            "Não foi possível salvar as informações. Por favor, tente novamente mais tarde.",
        });
      }
    }
  },
};

export default adminController;
