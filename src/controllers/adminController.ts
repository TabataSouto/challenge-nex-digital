import { NextFunction, Request, Response } from "express";
import spreadsheetTreatment from "../helpers/spreadsheetTreatment";
import configKnex from "../database/db";

const adminController = {
  upload: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const excelJson = spreadsheetTreatment(request.file!);
      await configKnex("transactions").insert(excelJson);
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
