import { Router } from "express";
import { getProductByCategoryId } from "../controllers/product.js";
const router = Router();


router.route("/:category").get(getProductByCategoryId);

export default router;
