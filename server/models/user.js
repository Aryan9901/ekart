import { model, Schema } from "mongoose";

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
    strict: true, // Ensures only defined fields are stored
    minimize: false, // Prevents empty objects from being removed
  }
);

userSchema.index({ phone: 1 }, { unique: true });

const User = model("User", userSchema);

export default User;
