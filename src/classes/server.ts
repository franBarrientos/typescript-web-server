import express, { Application } from "express";
import router from "../routes";
import cors from "cors";
import { dbConnect, synchronizeModels } from "../config/mysql";
export class Server {
  private app: Application;
  private port: String;
  constructor() {
    this.app = express();
    this.port = process.env.ENV || "3000";
    this.middlewares();
    this.routes();
    this.connectDb();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Listening on port" + this.port);
    });
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api", router);
  }

  async connectDb() {
    try {
      await dbConnect()
      await synchronizeModels()
      console.log("Database connected Succesfuly")
    } catch (error) {
      throw new Error("Can't Connect to DB" +error)
    }
  }
}


