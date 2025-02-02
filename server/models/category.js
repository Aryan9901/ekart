import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required!"],
      trim: true,
    },
    image_uri: {
      type: String,
      required: [true, "image uri is required"],
      trim: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.models.Category || model("Category", categorySchema);

export default Category;
