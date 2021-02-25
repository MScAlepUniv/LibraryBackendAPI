import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerAccountSchema = new Schema(
  {
    bank_name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bank_account_no: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "customer_accounts" }
);

class CustomerAccount {}

autherSchema.loadClass(CustomerAccount);
export default mongoose.model("CustomerAccount", customerAccountSchema);
