import mongoose from "mongoose";
import Product from "../models/product.js";

export const getProductByCategoryId = async (req, res) => {
  try {
    const { category } = req.params;

    console.log(category);

    // Validate categoryId format
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID format",
      });
    }

    // Fetch products by categoryId and populate the category details
    const products = await Product.find({ category: category })
      .populate("category", "name image_uri") // Populates only selected fields
      .lean(); // Converts Mongoose documents to plain JSON for better performance

    if (!products.length) {
      return res.status(404).json({
        success: false,
        message: "No products found for this category",
      });
    }

    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve products",
      error: error.message,
    });
  }
};
