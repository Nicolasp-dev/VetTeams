import User from "../../../models/User";
import dbConnection from "../../../services/dbConnection";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  const userId = Object.values(req.query);

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(userId);
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    case "PUT":
      try {
        const newData = req.body;
        await User.findByIdAndUpdate(userId, newData);
        const user = await User.findById(userId);
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    case "DELETE":
      try {
        await User.deleteOne({ id: userId });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
