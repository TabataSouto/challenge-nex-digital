import spreadsheetTreatment from "../helpers/spreadsheetTreatment";
import configKnex from "../database/db";

const adminServer = {
  upload: async (file: Express.Multer.File) => {
    const excelJson = spreadsheetTreatment(file!);
    await configKnex("transactions").insert(excelJson);
  },
};

export default adminServer;
