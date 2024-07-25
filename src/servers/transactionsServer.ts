import { Response } from "express";
import configKnex from "../database/db";

const transactionsServer = {
  getTransactions: async (response: Response) => {
    const transactions = await configKnex("transactions").select();

    if (!transactions) {
      return response
        .status(200)
        .json({ message: "Não existem transações no momento" });
    } else {
      return response.status(200).json(transactions);
    }
  },
};

export default transactionsServer;
