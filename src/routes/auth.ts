import express from "express";
import authController from "../controllers/authControlles";
import { authUser } from "../middlewares/authLogin";

const router = express.Router();

router.post("/", authUser, (request, response, next) =>
  authController.authLogin(request, response, next)
);

export default router;
