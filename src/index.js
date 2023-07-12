import express from "express";
import countryRoutes from "./routes/country.routes.js"
import {
    Country
} from "./models/Country.model.js";
const app = express();

app.use(express.json());

app.use("/api", countryRoutes);

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rest countries api</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
        <style>
            body{
                background: #FFC6AC;
            }
            a {
                box-shadow: inset 0 0 0 0 #002A32;
                color: #002A32;
                margin: 0 -.25rem;
                padding: 0 .25rem;
                transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
            }

            a:hover {
                box-shadow: inset 100px 0 0 0 #002A32;
                color: white;
                content: "🖇️";
            }
        </style>
    </head>

    <body>
        <h3>
            GET: All countries: <a
                href="https://bunyod-countries.onrender.com/api/"><i>https://bunyod-countries.onrender.com/api/</i></a>
        </h3>
        <h3>
            GET: One country: <a
                href="https://bunyod-countries.onrender.com/api/Uzbekistan"><i>https://bunyod-countries.onrender.com/api/{Uzbekistan}</i></a>
        </h3>
        <h3>
            UPDATE: One country: <a
                href="https://bunyod-countries.onrender.com/api/Uzbekistan"><i>https://bunyod-countries.onrender.com/api/{Uzbekistan}/</i></a>
        </h3>
    </body>

    </html>
    `);
})
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("run...");
})
// let data = [];
// try {
//   const req = await fetch('https://restcountries.com/v3.1/all');
//   data = await req.json();
// } catch {}
// await data?.forEach((item) => {
//   const { name, currencies, capital, region, subregion, languages, flags, population, borders, tld, cioc, cca3 } = item;

//   try {
//     Country.create({
//       name: name.common,
//       capital: capital ? capital[0] : null,
//       region,
//       subregion,
//       flags: flags.png,
//       population,
//       native_name: name?.nativeName && Object.values(name.nativeName)[0]?.common,
//       currency: currencies && Object.values(currencies)[0]?.name,
//       languages: languages && Object.values(languages),
//       borders,
//       domain_name: tld && tld[0],
//       alfa: cca3 ? cca3 : cioc,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });