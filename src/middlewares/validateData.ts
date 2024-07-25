import { NextFunction, Request, Response } from "express";

const validateData = (
  request: Request,
  respose: Response,
  next: NextFunction
) => {
  const { name, email, password, cpf } = request.body;

  !name || !email || !password || !cpf
    ? next({
        status: 406,
        message:
          "Os campos Nome, Email, Senha e CPF devem ser preenchidos!",
      })
    : next();
};

export default validateData;
