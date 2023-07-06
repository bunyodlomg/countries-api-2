import { Sequelize } from "sequelize";

const db = new Sequelize("bunyod", "postgres", "bunny7617", {
  host: "localhost",
  dialect: "postgres",
});

try {
  await db.authenticate();
  console.log("db connected");
} catch (error) {
  console.error("db con error:", error);
}

export default db;
