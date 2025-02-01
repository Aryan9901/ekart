import { model, Schema } from "mongoose";

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
    strict: true,
    minimize: false,
  }
);

const Category = model("User", categorySchema);

export default Category;
