import express from "express";
import usersController from "../controllers/usersController";

const router = express.Router();

router.get("/", (request, response) =>
  usersController.getAll(request, response)
);

export default router;
