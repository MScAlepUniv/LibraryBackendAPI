import mongoose from "mongoose";
const Schema = mongoose.Schema;

const copySchema = new Schema(
  {
    publication_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    ownership_transfer: {
      date: {
        type: Date,
        required: true,
      },
      beneficiary: {
        type: String,
        required: true,
      },
      availability_type_id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      invoice_id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      refund: {
        price: {
          type: Number,
          required: true,
        },
      },
      transfer_type: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: false, collection: "copies" }
);

class Copy {}

autherSchema.loadClass(Copy);
export default mongoose.model("Copy", copySchema);
