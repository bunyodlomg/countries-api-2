import express from "express";
import countryRoutes from "./routes/country.routes.js"
import { Country } from "./models/Country.model.js";
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
let data = [];
try {
  const req = await fetch('https://restcountries.com/v3.1/all');
  data = await req.json();
} catch {}
await data?.forEach((item) => {
  const { name, currencies, capital, region, subregion, languages, flags, population, borders, tld, cioc, cca3 } = item;

  try {
    Country.create({
      name: name.common,
      capital: capital ? capital[0] : null,
      region,
      subregion,
      flags: flags.png,
      population,
      native_name: name?.nativeName && Object.values(name.nativeName)[0]?.common,
      currency: currencies && Object.values(currencies)[0]?.name,
      languages: languages && Object.values(languages),
      borders,
      domain_name: tld && tld[0],
      alfa: cca3 ? cca3 : cioc,
    });
  } catch (error) {
    console.log(error);
  }
});