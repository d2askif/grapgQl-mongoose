import mongoose from "mongoose";
import { MONGO_URI } from "../utils/envConfig";

mongoose.Promise = global.Promise;
let isConnected: boolean;
const DB_URL = MONGO_URI || "";
let Db: any = null;

export async function dbConnect() {
  if (!isConnected) {
    const monitor = mongoose.connection;
    monitor.on("open", () => {
      console.log("DB connected");
    });

    monitor.on("error", () => {
      console.log("DB connection error");
    });

    const connection = await mongoose.connect(DB_URL, {
      useNewUrlParser: true
    });
    isConnected = connection.connection.readyState !== 0;
    Db = connection.connection.db;
    return Db;
  }
  return Db;
}
