import bcrypt from "bcrypt";
//for hash
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

//for compare and bcrypt
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
