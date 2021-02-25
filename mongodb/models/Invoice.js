import mongoose from "mongoose";
const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    customer_account_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    total_discount: {
      type: Number,
      required: true,
    },
    customer_accounts: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    final_price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "invoice" }
);

class Invoice {}

autherSchema.loadClass(Invoice);
export default mongoose.model("Invoice", invoiceSchema);
