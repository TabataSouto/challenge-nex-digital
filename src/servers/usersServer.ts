import configKnex from "../database/db";
import encryptedPassword from "../helpers/encryptedPassword";

const usersServer = {
  createUser: async (body: { password: string }) => {
    const newPassword = encryptedPassword(body.password);
    body.password = newPassword;
    await configKnex("users").insert(body);
    return { message: "Cadastro realizdo com sucesso!" };
  },
};

export default usersServer;
