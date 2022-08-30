import Pet from "../../../models/Pets";
import dbConnection from "../../../lib/dbConnection";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  const userId = req.query;

  switch (method) {
    case "GET":
      try {
        const pets = await Pet.find({});
        res.status(200).json({ success: true, data: pets });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    case "POST":
      try {
        const petData = req.body;
        const newPet = await Pet.create(petData);
        res.status(201).json({ success: true, data: newPet });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
