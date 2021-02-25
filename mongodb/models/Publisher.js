import mongoose from "mongoose";
const Schema = mongoose.Schema;

const publisherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
  },
  { timestamps: false, collection: "publishers" }
);

class Publisher {}

autherSchema.loadClass(Publisher);
export default mongoose.model("Publisher", publisherSchema);
