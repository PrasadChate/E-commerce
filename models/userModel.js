import mongoose from "mongoose";
const { Schema } = mongoose;
//schema creation for user
const userSchema = new Schema(
  {
    name: [
      {
        type: String,
        required: true,
        trim: true, //whitespace will be removed
      },
    ],
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, //bcrypt library is used for password hashing
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
  //   { currentDate: 1 }
);
export default mongoose.model("users", userSchema);
