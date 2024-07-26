import { Response } from "express";
import configKnex from "../database/db";
import { IFilters } from "../interfaces";
import { removeMaskMoney, formattedDateDB } from "../helpers/convertValue";

const transactionsServer = {
  getTransactions: async (filters: IFilters) => {
    const { status, product, startDate, endDate, minValue, maxValue } = filters;

    let query = configKnex("transactions").select("*");

    if (!query) {
      return { message: "Não existem transações no momento" };
    } else {
      console.log(removeMaskMoney(minValue!))
      if (status) query = query.where("status", status);
      if (product) query = query.where("description", "like", `%${product}%`);
      if (startDate && endDate)
        query = query.whereBetween("transaction_date", [
          formattedDateDB(startDate),
          formattedDateDB(endDate),
        ]);

      if (minValue && maxValue)
        query = query.whereBetween("amount_value", [
          removeMaskMoney(minValue),
          removeMaskMoney(maxValue),
        ]);

      const transactions = await query;
      return transactions;
    }
  },

  getTransactionUser: async (response: Response, cpf: string) => {
    const transactionsUser = await configKnex("transactions")
      .where({ cpf })
      .select("*");

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
