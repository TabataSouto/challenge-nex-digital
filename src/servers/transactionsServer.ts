import { Response } from "express";
import configKnex from "../database/db";
import { IFilters } from "../interfaces";
import {
  removeMaskMoney,
  formattedDateDB,
  cpfMask,
} from "../helpers/convertValue";

const transactionsServer = {
  getTransactions: async (filters: IFilters) => {
    const { status, cpf, product, startDate, endDate, minValue, maxValue } =
      filters;

    let query = configKnex("transactions").select("*");

    if (!(await query).length) {
      return [];
    } else {
      if (status) query = query.where("status", status);
      if (product) query = query.where("description", "like", `%${product}%`);
      if (cpf) query = query.where("cpf", cpfMask(cpf));
      if (startDate && endDate)
        query = query.whereBetween("transaction_date", [startDate, endDate]);

      if (minValue && maxValue)
        query = query.whereBetween("amount_value", [minValue, maxValue]);

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
