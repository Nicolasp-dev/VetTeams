import Pet from "../../../models/Pets";
import dbConnection from "../../../lib/dbConnection";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  const petId = Object.values(req.query);

  switch (method) {
    case "GET":
      try {
        const pet = await Pet.findById(petId);
        res.status(200).json({ success: true, data: pet });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    case "PUT":
      try {
        const newData = req.body;
        await Pet.findByIdAndUpdate(petId, newData);
        const pet = await Pet.findById(petId);
        res.status(200).json({ success: true, data: pet });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    case "DELETE":
      try {
        await Pet.findByIdAndDelete(petId);
        const pets = await Pet.find({});
        res.status(200).json({ success: true, data: pets });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
