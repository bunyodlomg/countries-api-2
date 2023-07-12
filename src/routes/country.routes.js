import express from "express";
import {
    getCountryAll,
    getCountry,
    editCountry
} from "../controller/country.controller.js";


const countryRoutes = express.Router();

countryRoutes.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Rest countries api</title>
  <style>
  a {
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
a:hover {
  box-shadow: inset 100px 0 0 0 #54b3d6;
  color: white;
}
  </style>
</head>

<body>
  <h1>
   GET: All countries: <a href="https://bunyod-countries.onrender.com/api/">https://bunyod-countries.onrender.com/api/</a>
  <h1>
  <br>
  <h1>
  GET: One country: <a href="https://bunyod-countries.onrender.com/api/Uzbekistan">https://bunyod-countries.onrender.com/api/{Uzbekistan}</a>
  <h1>
    <h1>
  UPDATE: One country: <a href="https://bunyod-countries.onrender.com/api/Uzbekistan">https://bunyod-countries.onrender.com/api/{Uzbekistan}/</a>
  <h1>
</body>
</html>
    `)
});


countryRoutes.get("/", getCountryAll);
countryRoutes.get("/:name", getCountry);
countryRoutes.patch("/:id", editCountry);

export default countryRoutes;