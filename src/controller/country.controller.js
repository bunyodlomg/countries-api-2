import db from "../config/db.js";
import {
  Country
} from "../models/Country.model.js";

export async function getCountryAll(req, res) {
  try {
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
    const result = await Country.findOne({
      where: {
        name: req.params.name
      },
    });
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}


export async function editCountry(req, res) {
  try {
    let id = req.params.id;
    id = id.charAt(0).toUpperCase() + id.slice(1);
    if (!req.params.id) {
      res.status(400).send({
        message: "Please enter a country name"
      });
    }
    const result = Country.update({
      capital: `${req.body.capital}`,
      region: `${req.body.region}`,
      population: `${req.body.population}`
    }, {
      where: {
        name: id
      }
    })
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