import mongoose from "mongoose";
const Schema = mongoose.Schema;

const borrowSchema = new Schema(
  {
    visitor_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    employee_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    copy_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    date_borrow: {
      type: Date,
      required: true,
    },
    type_borrow: {
      type: String,
      required: true,
    },
    date_return: {
      type: Date,
      required: true,
    },
    date_actual_return: {
      type: Date,
    },
  },
  { timestamps: true, collection: "borrows" }
);

class Borrow {}

autherSchema.loadClass(Borrow);
export default mongoose.model("Borrow", borrowSchema);
