import mongoose from "mongoose";
const Schema = mongoose.Schema;

const autherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
    },
    place_of_birth: {
      type: String,
    },
    address: {
      type: String,
    },
    date_of_death: {
      type: Date,
    },
    biograohy: {
      type: String,
    },
  },
  {
    timestamps: false,
    collection: "authors",
  }
);

class Auther {
  getFullName() {
    return `${this.name} ${this.last_name}`;
  }
}

autherSchema.loadClass(Auther);
export default mongoose.model("Auther", autherSchema);
