import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    phone: {
      type: String,
      required: [true, "Phone number is required!"],
      unique: true,
      trim: true,
      match: [/^\d{10}$/, "Phone number must be exactly 10 digits."],
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || model("User", userSchema);

export default User;
