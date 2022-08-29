import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../config.env" });

const DB =
  "mongodb+srv://Vet_Admin:a2lxpeNE8AZj4oCV@cluster0.vezg6vt.mongodb.net/VetTeams?retryWrites=true&w=majority";

const dbConnection = async () => {
  await mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful"));
};

export default dbConnection;
