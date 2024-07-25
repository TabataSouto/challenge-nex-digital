import "express-async-errors";
import express from "express";
import cors from "cors";
import router from "./routes";
import errorHandler from "./middlewares/errorHandler";
import "dotenv/config";


const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
