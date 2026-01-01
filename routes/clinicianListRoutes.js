import express from "express";
import {
  addClinician,
  getClinicians,
  updateClinician,
  deleteClinician
} from "../controllers/clinicianListController.js";

const router = express.Router();

router.post("/", addClinician);
router.get("/", getClinicians);
router.put("/:id", updateClinician);
router.delete("/:id", deleteClinician);

export default router;
