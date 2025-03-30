import { Router } from "express";
import {
  createOrder,
  createTransaction,
  getOrdersByUserId,
} from "../controllers/order.js";



const router = Router();

router.route("/").post(createOrder);
router.route("/:userId").get(getOrdersByUserId);
router.route("/transaction").post(createTransaction);

export default router;
