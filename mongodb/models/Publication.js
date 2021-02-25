import mongoose from "mongoose";
const Schema = mongoose.Schema;

const publicationSchema = new Schema(
  {
    ISBN: {
      type: Number,
    },
    title: {
      type: String,
      required: true,
    },
    date_of_publishing: {
      type: Date,
    },
    publisher_id: {
      type: Schema.Types.ObjectId,
    },
    class_id: {
      type: Schema.Types.ObjectId,
    },
    keywords: {
      type: String,
    },
    num_of_pages: {
      type: Number,
    },
    subject_id: {
      type: Schema.Types.ObjectId,
    },
    pirchase_price_copy: {
      type: Number,
    },
    sale_price_copy: {
      type: Number,
    },
    for_sale: {
      type: "bool",
    },
    discout_offers: {
      rate_of_discount: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
    authors: [
      {
        type: Schema.Types.ObjectId,
        required: true,
      },
    ],
  },
  { timestamps: true, collection: "publications" }
);

class Publication {}

autherSchema.loadClass(Publication);
export default mongoose.model("Publication", publicationSchema);
