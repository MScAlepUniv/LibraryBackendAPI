import mongoose from "mongoose";
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    father_name: {
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
    qualification: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    date_of_start: {
      type: Date,
      required: true,
    },
    date_of_end: {
      type: Date,
    },
    sale_permission: {
      type: Boolean,
      required: true,
    },
    purchase_permission: {
      type: Boolean,
      required: true,
    },
    permission_granted_permissions: {
      type: Boolean,
      required: true,
    },
    user_name: {
      type: String,
    },
    pass: {
      type: String,
    },
    requests: [
      {
        publication_name: {
          type: String,
          required: true,
        },
        not_available_reason: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true, collection: "employees" }
);

class Employee {}

autherSchema.loadClass(Employee);
export default mongoose.model("Employee", employeeSchema);
