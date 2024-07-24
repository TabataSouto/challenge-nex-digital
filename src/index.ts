import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => res.send("Hello"));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
