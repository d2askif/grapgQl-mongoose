import mongoose from "mongoose";

mongoose.Promise = global.Promise;
let isConnected: boolean;
const MONGO_URI2 =
  "mongodb://daniel.shenkutie:ict4rd2012@ds211865.mlab.com:11865/gql-nenja";
const MONGO_URI =
  "mongodb+srv://daniel:ict4rd2012@cluster0-j7d3x.mongodb.net/test?retryWrites=true&w=majority";
const DB_URL = MONGO_URI;
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
