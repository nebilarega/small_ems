import mongoose from "mongoose";
var Schema = mongoose.Schema;

var employeeSchema = new Schema(
  {
    id: Number,
    employeeId: Number,
    name: {
      type: String,
      required: true,
    },
    age: Number,
    sex: String,
    salary: Number,
    isCurrent: Boolean,
    startDate: Date,
    leaveData: Date,
    createdAt: Date,
    completionDate: Date,
  },
  { timestamps: true }
);
employeeSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});
const Employee = mongoose.model("employees", employeeSchema);

export default Employee;
