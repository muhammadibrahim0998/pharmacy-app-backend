import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";
import Clinician from "./models/Clinician.js";
import clinicianListRoutes from "./routes/clinicianListRoutes.js";
import diagnosesRoutes from "./controllers/diagnosesController.js";
import drugRoutes from "./routes/drugRoutes.js";
import drugListRoutes from "./routes/drugListRoutes.js";
import drugRoutes1 from "./routes/drugRoutes1.js";
import pharmacyRoutes from "./routes/pharmacyRoutes.js";
import payerRoutes from "./routes/payerRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";


import {
  addClinician,
  getClinicians,
  updateClinician,
  deleteClinician,
} from "./controllers/clinicianController.js"


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ⚠️ THIS MUST BE BEFORE ROUTES
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));



diagnosesRoutes(app);

// ✅ API Routes
app.post("/api/clinicians", addClinician);
app.get("/api/clinicians", getClinicians);
app.put("/api/clinicians/:id", updateClinician);
app.delete("/api/clinicians/:id", deleteClinician);


app.use("/api/clinician-list", clinicianListRoutes);
app.use("/api/diagnoses-list", diagnosesRoutes);
app.use("/api/drugs", drugRoutes);
app.use("/api/drugs_list", drugListRoutes);
app.use("/api/drugTable", drugRoutes1);
app.use("/api/pharmacies", pharmacyRoutes);
app.use("/api/payers", payerRoutes);
app.use("/api/auth", userRoutes);


// Simple test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Sync DB and start server
const PORT = process.env.PORT || 5000;

sequelize
  .sync() // { force: true } که tables ری سیټ کول غواړئ
  .then(() => {
    console.log("✅ Database synced");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ DB Sync Error:", err));


