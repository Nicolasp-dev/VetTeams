import mongoose from "mongoose";

const RecordSchema = mongoose.Schema({
  record: String,
  diagnosis: String,
  treatment: String,
  date: Date,
});

const Record = mongoose.models.Record || mongoose.model("Record", RecordSchema);

export default Record;
