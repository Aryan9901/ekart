import { Router } from "express";
import { getAllCategory } from "../controllers/category.js";

const router = Router();

router.route("/").get(getAllCategory);

export default router;
