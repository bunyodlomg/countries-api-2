import { DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Country = db.define('Country', {
  name: DataTypes.STRING,
  native_name: DataTypes.STRING,
  capital: DataTypes.STRING,
  region: DataTypes.STRING,
  subregion: DataTypes.STRING,
  population: DataTypes.INTEGER,
  flags: DataTypes.TEXT,
  currency: DataTypes.STRING,
  languages: DataTypes.ARRAY(DataTypes.STRING),
  borders: DataTypes.ARRAY(DataTypes.STRING),
  domain_name: DataTypes.STRING,
  alfa: DataTypes.STRING,
});
await Country.sync({force:true});

// [population, name,region,capital,nativename,subregion,capital,domen,currencies, languages, borders,flag,]