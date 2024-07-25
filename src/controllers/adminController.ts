import { NextFunction, Request, Response } from "express";
import spreadsheetTreatment from "../helpers/spreadsheetTreatment";
import configKnex from "../database/db";

const adminController = {
  upload: async (request: Request, response: Response, next: NextFunction) => {
    if (!request.file) {
      return response.status(404).json({ message: "Nenhum arquivo enviado" });
    }
    try {
      const excelJson = spreadsheetTreatment(request.file);
      await configKnex("transactions").insert(excelJson);

      return response
        .status(201)
        .json({ message: "Informações de transação salvas com sucesso!" });
    } catch (error) { console.log(error)}
  },
};

export default adminController;
