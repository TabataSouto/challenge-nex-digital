import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

const extractToken = (bearerToken: string) => {
  return bearerToken.split(" ")[1];
};

const authorization = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const bearerToken = request.header("Authorization");

  if (!bearerToken) {
    return next({
      status: 401,
      message: "Usuário não autorizado",
    });
  }

  const token = extractToken(bearerToken);

  !token
    ? next({
      status: 401,
        message: "Acesso negado!",
      })
    : jwt.verify(token, secret!, (err) =>
        err ? next({ status: 400, message: "Token inválido!" }) : next()
      );
};

export default authorization;
