import { Sequelize } from "sequelize";

// const db = new Sequelize("bunyod", "postgres", "postgres", 
// {
//   host: "localhost",
//   port: 5432,
//   dialect: "postgres",
// });

const db = new Sequelize(
  "postgres://bunyod_user:uSBsMPn39ECttqnm99YFnKSkxrWVMjKS@dpg-cilht595rnuvtgsnft10-a.singapore-postgres.render.com/bunyod"
  ,{
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
  },
)

try {
  await db.authenticate();
  console.log("db connected");
} catch (error) {
  console.error("db con error:", error);
}

export default db;
