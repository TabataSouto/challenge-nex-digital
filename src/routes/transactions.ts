import express from "express";
import transactionsController from "../controllers/transactionsController";
import authorization from "../middlewares/authorization";

const router = express.Router();

router.get("/", authorization, (request, response, next) =>
  transactionsController.getTransactions(request, response, next)
);

router.get("/:cpf", authorization, (request, response, next) =>
  transactionsController.getTransactionUser(request, response, next)
);

export default router;
