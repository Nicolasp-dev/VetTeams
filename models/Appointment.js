import mongoose from "mongoose";

const AppointmentSchema = mongoose.Schema({
  service: String,
  date: Date,
  description: String,
});

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
