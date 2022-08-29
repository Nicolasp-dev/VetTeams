import Record from "../../../models/Record";
import dbConnection from "../../../services/dbConnection.js";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  const recordId = Object.values(req.query);

  switch (method) {
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
