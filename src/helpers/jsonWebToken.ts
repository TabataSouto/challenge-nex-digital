import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export const generateToken = (body: {
  email: string;
  cpf: string;
  role: string;
}) => {
  return jwt.sign({ data: body }, secret!, {
    expiresIn: "1d",
    algorithm: "HS256",
  });
};
