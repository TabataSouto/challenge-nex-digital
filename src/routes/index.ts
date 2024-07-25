import express from "express";
import routerUsers from "./users";
import routerAdmin from "./admin";

const router = express.Router();

router.use("/user", routerUsers);
router.use("/admin", routerAdmin);

export default router;
