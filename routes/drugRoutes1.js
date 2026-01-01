import express from "express";
import {
  getAllDrugs,
  getDrug,
  createDrug,
  updateDrug,
  deleteDrug,
} from "../controllers/drugTable1.js";
  
const router = express.Router();

// CRUD routes
router.get("/", getAllDrugs);
router.get("/:id", getDrug);
router.post("/", createDrug);
router.put("/:id", updateDrug);
router.delete("/:id", deleteDrug);

export default router;
