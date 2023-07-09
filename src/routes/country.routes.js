import express from "express";
import {getCountryAll, getCountry, editCountry} from "../controller/country.controller.js";


const countryRoutes = express.Router();

countryRoutes.get("/", getCountryAll);
countryRoutes.get("/:name", getCountry);
countryRoutes.patch("/:id", editCountry);

export default countryRoutes;
