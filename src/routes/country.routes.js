const express = require("express");
const cr = require("../controller/country.controller.js");

const countryRoutes = express.Router();

countryRoutes.get("/", getCountryAll);
countryRoutes.get("/:id", getCountry);
countryRoutes.patch("/:id", editCountry);

export default countryRoutes;