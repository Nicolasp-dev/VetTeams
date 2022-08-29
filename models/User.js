import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  document: Number,
  gender: String,
  phone: Number,
  email: String,
  age: Number,
  address: String,
  password: String,
  confirmPassword: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
