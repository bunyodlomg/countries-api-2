import express from "express";
import countryRoutes from "./routes/country.routes.js"
const app = express();

app.use(express.json());

app.use("/api", countryRoutes);


app.listen(8080, ()=>{
    console.log("run...");
})