import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/product.js";
import Category from "./models/category.js";
import { categoriesData, productData } from "./seedData.js";

dotenv.config();

async function seedDatabase() {
  try {
    console.log("Connecting to database... ⏳");
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Clearing existing data... 🔄");
    await Product.deleteMany({});
    await Category.deleteMany({});

    console.log("Inserting categories... 📂");
    const categoryDocs = await Category.insertMany(categoriesData);

    // Create a mapping of category names to their ObjectIds
    const categoryMap = categoryDocs.reduce((map, category) => {
      map[category.name] = category._id;
      return map;
    }, {});

    console.log("Inserting products... 🛒");
    const productWithCategoryIds = productData.map((product) => {
      const categoryId = categoryMap[product.category];

      if (!categoryId) {
        throw new Error(
          `No matching category found for product: ${product.name}`
        );
      }

      return { ...product, category: categoryId };
    });

    const insertedProducts = await Product.insertMany(productWithCategoryIds);

    console.log("Updating category references... 🔄");
    for (const product of insertedProducts) {
      await Category.updateOne(
        { _id: product.category },
        { $push: { products: product._id } }
      );
    }

    console.log("Database seeded successfully ✅");
  } catch (error) {
    console.error("Error seeding data ❌", error);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed ✅");
  }
}

seedDatabase();
