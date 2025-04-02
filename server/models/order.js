import mongoose, { model, Schema } from "mongoose";

const itemSchema = new Schema({
  
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    deliveryDate: { type: Date, required: true },
    address: { type: String },
    items: {
      type: [itemSchema],
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Order Placed",
        "Shipping",
        "Out for Delivery",
        "Delivered",
        "Cancelled",
      ],
      default: "Order Placed",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || model("Order", OrderSchema);

export default Order;
