import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/user", userRoutes);

const start = async () => {
  try {
    app.listen({ port: 3000, host: "0.0.0.0" }, (err, addr) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Server started on http://localhost:3000`);
      }
    });
  } catch (error) {
    console.error("Error starting server -> ", error);
  }
};

start();
