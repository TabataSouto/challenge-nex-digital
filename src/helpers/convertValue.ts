import moment from "moment";
import { ITransactions } from "src/interfaces";

const convertValue = (transactions: ITransactions[]) => {
  return transactions.map((transaction) => ({
    cpf: transaction.cpf,
    id: transaction.id,
    status: transaction.status,
    product: transaction.description.slice(transaction.description.length - 1),
    amountValue: parseFloat(transaction.amount_value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    pointsValue: parseFloat(transaction.points_value).toLocaleString("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }),
    transactionDate: moment(transaction.transaction_date)
      .format("DD-MM-YYYY")
      .replace(/[-]/g, "/"),
  }));
};

export default convertValue;
