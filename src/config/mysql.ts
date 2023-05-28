import { Sequelize } from "sequelize-typescript";
import models from "../models";

export const sequelize = new Sequelize({
  dialect:"mysql",
  host:"localhost",
  username:"root",
  password:"franco19",
  database:"school",
  logging:false,
  models,
});


export const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Usnable to connect to the database:", error);
  }
};


export const synchronizeModels = async () => {
  // Sincroniza los modelos
  await sequelize.sync({force:false });
  console.log("All models were synchronized successfully.");
};
