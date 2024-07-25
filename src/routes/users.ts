import express from "express";
import usersController from "../controllers/usersController";
import validateUser from "../middlewares/validateUser";
import validateData from "../middlewares/validateData";

const router = express.Router();

router.post("/register", validateUser, validateData, (request, response, next) =>
  usersController.createUser(request, response, next)
);

export default router;
