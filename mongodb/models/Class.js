import mongoose from "mongoose";
const Schema = mongoose.Schema;

const classSchema = new Schema(
  { class_name: { type: String, required: true } },
  { timestamps: false, collection: "classes" }
);

class Class {}

autherSchema.loadClass(Class);
export default mongoose.model("Class", classSchema);
