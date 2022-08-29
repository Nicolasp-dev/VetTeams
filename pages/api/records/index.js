import Record from "../../../models/Record";
import dbConnection from "../../../services/dbConnection";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  const recordId = req.query;
  const recordData = req.body;

  switch (method) {
    case "GET":
      try {
        const records = await Record.find({});
        res.status(200).json({ success: true, data: records });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    case "POST":
      try {
        const newRecord = await Record.create(recordData);
        res.status(201).json({ success: true, data: newRecord });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    case "DELETE":
      try {
        await Record.findByIdAndDelete(recordId);
        const records = await Record.find({});
        res.status(200).json({ success: true, data: records });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
