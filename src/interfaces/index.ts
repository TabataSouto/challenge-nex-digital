export interface IHttpError {
  status: number;
  message: string;
}

export interface ITransactions {
  id: number;
  amount_value: string;
  cpf: string;
  description: string;
  points_value: string;
  status: string;
  transaction_date: string;
}
