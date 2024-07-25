import express from "express";
import routerUsers from "./users";
import routerAdmin from "./admin";
import routerAuth from "./auth";
import routerTransactions from "./transactions";

const router = express.Router();

router.use("/user", routerUsers);
router.use("/admin", routerAdmin);
router.use("/auth", routerAuth);
router.use("/transactions", routerTransactions)

export default router;
