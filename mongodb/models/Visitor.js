import mongoose from "mongoose";
const Schema = mongoose.Schema;

const visitorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    futher_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    subcription_date: {
      type: Date,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
    },
    password: {
      type: String,
    },
    subscription_card: {
      subscription_id: {
        type: Number,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      required: true,
    },
    accounts: [{ type: Schema.Types.ObjectId }],
  },
  { timestamps: false, collection: "visitors" }
);

class Visitor {}

visitorSchema.loadClass(Visitor);
export default mongoose.model("Visitor", visitorSchema);
