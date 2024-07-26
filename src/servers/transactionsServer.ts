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
      return transactions;
    }
  },
  getTransactionUser: async (response: Response, cpf: string) => {
    const transactionsUser = await configKnex("transactions")
      .where({ cpf })
      .select();

    if (!transactionsUser.length) {
      return response
        .status(200)
        .json({ message: "Não existem transações para esse usuário" });
    } else {
      return transactionsUser;
    }
  },
};

export default transactionsServer;
