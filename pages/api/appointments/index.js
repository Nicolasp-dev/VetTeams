import Appointment from "../../../models/Appointment";
import dbConnection from "../../../lib/dbConnection";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  const appointmentData = req.body;

  switch (method) {
    case "GET":
      try {
        const appointments = await Appointment.find({});
        res.status(200).json({ success: true, data: appointments });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;
    case "POST":
      try {
        const newAppointment = await Appointment.create(appointmentData);
        res.status(201).json({ success: true, data: newAppointment });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
