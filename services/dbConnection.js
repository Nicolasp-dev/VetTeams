import mongoose from "mongoose";

const DB = process.env.DATABASE;

const dbConnection = async () => {
  await mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful"));
};

export default dbConnection;
