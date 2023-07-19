import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  database_url: process.env.APPLICATION_dATABASE_URL,
  port: process.env.APPLICATION_PORT,
  salt: process.env.BCRYPT_SALT_ROUNDS,
  jwt_secret: process.env.JWT_ACCESS_SECRET_KEY,
  jwt_refresh: process.env.JWT_REFRESH_SECRET_KEY,
  env: process.env.NODE_ENV,
};
