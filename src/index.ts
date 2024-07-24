import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
