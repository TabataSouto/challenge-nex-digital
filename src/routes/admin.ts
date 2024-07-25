import express from "express";
import adminController from "../controllers/adminController";
// Middleware para manipular uploads de arquivos
import multer from "multer";
// Biblioteca para ler e escrever arquivos Excel.
import xlsx from "xlsx";
import checkFile from "src/middlewares/checkFile";

const router = express.Router();
// configura o armazenamento de arquivos em memória
const storage = multer.memoryStorage();
// cria uma instância com configurações do armazenamento
const upload = multer({ storage });

// upload.single("file") lida com o upload de um único arquivo
router.post(
  "/upload",
  upload.single("file"),
  checkFile,
  (request, response, next) => adminController.upload(request, response, next)
);

export default router;
