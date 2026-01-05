import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // Railway port
    dialect: "mysql",
    dialectOptions: {
      connectTimeout: 10000, // optional: increase timeout for remote DB
    },
  }
);

// Optional: test connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("DB Connection Error:", err));

export default sequelize;
