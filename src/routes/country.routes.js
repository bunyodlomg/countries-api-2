import express from "express";
import {getCountryAll, getCountry, editCountry, getCountryFull} from "../controller/country.controller.js";


const countryRoutes = express.Router();

countryRoutes.get("/", getCountryAll);
countryRoutes.get("/:name", getCountry);
countryRoutes.get("/full/:name", getCountryFull);
countryRoutes.patch("/:id", editCountry);

export default countryRoutes;
