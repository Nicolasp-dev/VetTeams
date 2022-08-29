import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
  name: String,
  microchip: Number,
  species: String,
  breed: String,
  age: Number,
  weight: Number,
  status: String,
  gender: String,
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", PetSchema);

export default Pet;
