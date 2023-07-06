const express =  require("express");
const countryRoutes = require("./routes/country.routes.js")
const app = express();

app.use(express.json());



app.listen(8080, ()=>{
    console.log("run...");
})