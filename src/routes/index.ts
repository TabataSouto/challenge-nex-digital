import express from "express";
import routerUsers from "./users";

const router = express.Router();

router.use("/user", routerUsers);

export default router;
