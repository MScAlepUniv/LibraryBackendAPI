import mongoose from "mongoose";
const Schema = mongoose.Schema;

const availabilitySchema = new Schema(
  { availability_type: { type: String, required: true } },
  { timestamps: false, collection: "availabilities" }
);

class Availability {}

autherSchema.loadClass(Availability);
export default mongoose.model("Availability", availabilitySchema);
