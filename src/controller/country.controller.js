import db from "../config/db.js";

export async function getCountryAll(req, res) {
  try {
    const result = await db.query(`select "name.common", population, region, capital, "coatOfArms.svg" from country`);
    res.json(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message });
    console.log(error.message);
  }
}

export async function getCountry(req, res) {
  try {
    let name = req.params.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const result = await db.query(
      `select "name.common", population, region, capital, "coatOfArms.svg" from country where "name.common" = '${name}'`
    );
    res.json(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

export async function getCountryFull(req, res) {
  try {
    let name = req.params.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const result = await db.query(
      `select "name.common", population, region, capital, subregion, tld, "coatOfArms.svg", borders, "coatOfArms.svg"   from country where "name.common" = '${name}'`
    );
    //  
    res.json(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

export async function editCountry(req, res) {

  try {
    const id = req.params.id;
    const data = req.body;
    if (!req.body.newName.length) {
      res.status(400).send({ message: "Please enter a country name" });
    }
    const result = await db.query(`UPDATE country SET "name.common" = '$1' WHERE "name.common" = '$2'`,
      [data.newName, id,])

    res.status(201).send({
      success: true,
      message: "Country updated successfully",
      result
    });
  } catch (error) {
    await db.query("ROLLBACK");
    res.status(400).send({ message: error.message });
    console.log(error.message);
  }
}
