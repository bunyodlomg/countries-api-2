import { Sequelize } from "sequelize";

const db = new Sequelize("bunyod", "postgres", "postgres", 
{
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

try {
  await db.authenticate();
  console.log("db connected");
} catch (error) {
  console.error("db con error:", error);
}

export default db;
