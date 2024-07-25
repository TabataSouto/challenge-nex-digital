import { NextFunction, Request, Response } from "express";
import { IHttpError } from "src/interfaces";

const errorHandler = (
  error: IHttpError,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  const statusCode = response.statusCode || 500;
  const errorStatusCode = error.status || statusCode;
  const errorMessage = error.message || "Erro interno do servidor";

  return response.status(errorStatusCode).json({ message: errorMessage });
};

export default errorHandler;
