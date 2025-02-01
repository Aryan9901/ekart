import { Router } from "express";
import { loginOrSignup } from "../controllers/user.js";

const router = Router();

router.route("/auth").post(loginOrSignup);

export default router;
