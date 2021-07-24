import mongoose from "mongoose";
import config from "../config/config";

mongoose.connect(config.DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection SUCCESS");
});
