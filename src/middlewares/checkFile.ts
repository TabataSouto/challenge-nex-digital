import { NextFunction, Request, Response } from "express";

const checkFile = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  if (!request.file) {
    return next({
      status: 404,
      message: "Nenhum arquivo enviado",
    });
  }
  next();
};

export default checkFile;
