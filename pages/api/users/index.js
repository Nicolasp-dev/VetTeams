import User from "../../../models/User";
import dbConnection from "../../../lib/dbConnection";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    case "POST":
      try {
        const userData = req.body;
        const newUser = await User.create(userData);
        res.status(201).json({ success: true, data: newUser });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
