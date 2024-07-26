import moment from "moment";
import { ITransactions } from "src/interfaces";

export const removeMaskMoney = (value: string) =>
  value
    .replace(/[^\d,]/g, "") // Remove todos os caracteres não numéricos e vírgulas
    .replace(",", ".") // Substitui a vírgula por ponto
    .replace(/\.(?=.*\.)/, ""); // Remove o ponto do milhar (caso haja mais de um ponto);

// startOf('day') garante que startDate comece às 00:00:00.
// endOf('day') garante que endDate termine às 23:59:59.
export const formattedDateDB = (date: string) =>
  moment(date, "DD/MM/YYYY").endOf("day").format("YYYY-MM-DD HH:mm:ss");

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
