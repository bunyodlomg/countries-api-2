import db from "../config/db.js";
import { Country } from "../models/Country.model.js";

export async function getCountryAll(req, res) {
  try {
    // const result = await db.query(`select name, population, region, capital, flagsvg, subregion, tld, borders from countries`);
    const result = await Country.findAll()
    res.json(result);
  } catch (error) {
    res.status(400).send({
      message: error.message
    });
    console.log(error.message);
  }
}

export async function getCountry(req, res) {
  try {
    let name = req.params.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const result = await db.query(
      `select name, population, region, capital, flagsvg, subregion, tld, borders from countries where name = '${name}'`
    );
    res.json(result);
  } catch (error) {
    res.status(400).send({
      message: error.message
    });
  }
}

export async function editCountry(req, res) {

  try {
    let id = req.params.id;
    id = id.charAt(0).toUpperCase() + id.slice(1);

    const data = req.body;
    if (!req.body.name.length) {
      res.status(400).send({
        message: "Please enter a countries name"
      });
    }
    const result = await db.query(`UPDATE countries SET name = '${data.name}', population = ${data.population}, region = '${data.region}', capital = '${data.capital}', flagsvg = '${data.flagsvg}', subregion = '${data.subregion}', tld = '${data.tld}', borders = '${data.borders}' WHERE name = '${id}'`)
    res.status(201).send({
      success: true,
      message: "countries updated successfully",
      result
    });
  } catch (error) {
    await db.query("ROLLBACK");
    res.status(400).send({
      message: error.message
    });
    console.log(error.message);
  }
}