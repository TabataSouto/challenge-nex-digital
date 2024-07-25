// import { File } from "multer";
import xlsx from "xlsx";
import moment from "moment";

const spreadsheetTreatment = (body: Express.Multer.File) => {
  // Lê o buffer do arquivo e cria um objeto
  const workbook = xlsx.read(body.buffer);

  // pega a primeira aba do excel
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // converte a planilha em um array de arrays, raw falase retorna data no padrão do excel
  const data = xlsx.utils.sheet_to_json(sheet, {
    header: 0,
    raw: false,
  }) as any;

  // mapeia os dados das linhas para o formato desejado
  const transactions = data.map((row: any) => ({
    cpf: row["CPF"],
    description: row["Descrição da transação"],
    transaction_date: moment(row["Data da transação"], "DD-MM-YYYY").format(
      "YYYY-MM-DD"
    ),
    points_value: row["Valor em pontos"],
    amount_value: parseFloat((row["Valor"] as string).replace(",", "")).toFixed(
      2
    ),
    status: row["Status"],
  }));

  return transactions;
};

export default spreadsheetTreatment;
