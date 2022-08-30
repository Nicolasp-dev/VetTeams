import Appointment from "../../../models/Appointment";
import dbConnection from "../../../lib/dbConnection";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  const appointmentId = Object.values(req.query);

  switch (method) {
    case "DELETE":
      try {
        await Appointment.findByIdAndDelete(appointmentId);
        const appointments = await Appointment.find({});
        res.status(200).json({ success: true, data: appointments });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
  }
}
