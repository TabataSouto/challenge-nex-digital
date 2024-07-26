import { generateToken } from "../helpers/jsonWebToken";
import configKnex from "../database/db";

const authServer = {
  createToken: async (email: string) => {
    const user = await configKnex("users").where({ email }).first();
    const token = generateToken({
      email,
      name: user.name,
      cpf: user.cpf,
      role: user.role,
    });
    return { message: "usuário autorizado!", token };
  },
};

export default authServer;
