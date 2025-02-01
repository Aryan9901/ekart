import { model, Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    paymentId: { type: String, required: [true, "Payment id is required"] },
    orderId: { type: String, required: [true, "Order id is required"] },
    status: {
      type: String,
      enum: ["Success", "Failed", "Pending"],
      required: true,
    },
    amount: { type: Number, required: [true, "Amount is required"] },
  },
  { timestamps: true }
);

const Transaction = model("Transaction", transactionSchema);

export default Transaction;
