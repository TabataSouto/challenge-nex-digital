import { NextFunction, Request, Response } from "express";
import configKnex from "../database/db";
import transactionsServer from "src/servers/transactionsServer";

const transactionsController = {
  getTransactions: async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const transactions = await transactionsServer.getTransactions(response);
      return response.status(200).json(transactions);
    } catch (error) {
      if (error instanceof Error) {
        return next({
          status: 500,
          message: "Algo deu errado! Por favor, tente novamente mais tarde.",
        });
      }
    }
  },
};

export default transactionsController;
