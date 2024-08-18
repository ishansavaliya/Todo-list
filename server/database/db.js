import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.5qeye.mongodb.net/?retryWrites=true&w=majority&appName=MERN-todo`;

  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log("Mongoose is connected!!!");
    })
    .catch((err) => {
      console.log("Mongoose connection error: ", err.message);
    });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected!!!");
  });
};

export default Connection;
