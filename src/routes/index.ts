import express from "express";
import routerUsers from "./users";
import routerAdmin from "./admin";
import routerAuth from "./auth";

const router = express.Router();

router.use("/user", routerUsers);
router.use("/admin", routerAdmin);
router.use("/auth", routerAuth);

export default router;
