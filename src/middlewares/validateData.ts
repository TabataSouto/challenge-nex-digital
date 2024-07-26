import { NextFunction, Request, Response } from "express";

const validateData = (
  request: Request,
  respose: Response,
  next: NextFunction
) => {
  const { name, email, password, cpf } = request.body;
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*\-+?]{8,}$/;

  !name || !email || !password || !cpf
    ? next({
        status: 406,
        message: "Os campos Nome, Email, Senha e CPF devem ser preenchidos!",
      })
    : !regex.test(password)
    ? next({
        status: 406,
        message:
          "A senha precisa ter 1 caracter maíusculo, 1 caracter minúsculo, 1 dígito e no mínimo de 8 caracteres",
      })
    : next();
};

export default validateData;
