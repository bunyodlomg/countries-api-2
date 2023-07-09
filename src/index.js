import express from "express";
import countryRoutes from "./routes/country.routes.js"
const app = express();

app.use(express.json());

app.use("/api", countryRoutes);
app.get("/", (req, res)=>{
    res.send("hello world");
})
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("run...");
})