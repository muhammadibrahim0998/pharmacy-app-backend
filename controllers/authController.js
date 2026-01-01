import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// REGISTER
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const profileImage = req.file ? req.file.filename : null;

    const user = await User.create({
      name,
      email,
      password,
      role,
      profileImage,
    });
    if (req.file) {
      data.profileImage = req.file.filename;
    }

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


// LOGOUT
export const logout = (req, res) => {
  res.json({ message: "Logout successful" });
};
