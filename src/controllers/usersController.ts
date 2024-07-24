import { Request, Response } from "express";

const usersController = {
  getAll: (request: Request, response: Response) => {
    return response.status(200).json({ message: "Tudo dando certo!" });
  },
};

export default usersController;
