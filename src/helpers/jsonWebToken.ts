import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const generateToken = (body: {
  name: string;
  email: string;
  cpf: string;
  role: string;
}) => {
  return jwt.sign({ data: body }, secret!, {
    expiresIn: "1d",
    algorithm: "HS256",
  });
};
