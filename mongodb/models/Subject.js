import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    subject_description: {
      type: String,
      required: true,
    },
  },
  { timestamps: false, collection: "subjects" }
);

class Subject {}

autherSchema.loadClass(Subject);
export default mongoose.model("Subject", subjectSchema);
