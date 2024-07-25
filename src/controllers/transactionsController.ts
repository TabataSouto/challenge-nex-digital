import { NextFunction, Request, Response } from "express";
import transactionsServer from "../servers/transactionsServer";

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

  getTransactionUser: async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { cpf } = request.params;
    try {
      const transactionsUser = await transactionsServer.getTransactionUser(
        response,
        cpf
      );
      return response.status(200).json(transactionsUser);
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
