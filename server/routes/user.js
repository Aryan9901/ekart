import { Router } from "express";

const router = Router();

router.route("/auth").post(loginOrSignup);

export default router;
