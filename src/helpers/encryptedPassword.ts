import bcrypt from "bcrypt";

const encryptedPassword = (password: string) => {
  // criar uma sequencia de caracteres/numeros
  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, salt);
};

export default encryptedPassword;
