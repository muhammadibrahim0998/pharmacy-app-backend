import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ClinicianList = sequelize.define(
  "clinician_list",
  {
    id: {
      type: DataTypes.INTEGER,      // simple auto-increment integer
      autoIncrement: true,           // auto-increment
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active",
    },
  },
  {
    timestamps: true,  // createdAt & updatedAt
  }
);

export default ClinicianList;
