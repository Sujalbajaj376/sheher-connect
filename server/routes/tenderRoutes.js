const express = require("express");
const multer = require("multer");
const path = require("path");
const Tender = require("../models/Tender");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Files will be saved in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    // Set the filename as current timestamp and the original filename
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// POST route to add a tender (Admin only)
router.post("/", verifyAdmin, upload.single("file"), async (req, res) => {
  try {
    // Extract tender data from request body
    const { title, department, description, type, deadline } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : ""; // Construct file URL

    // Create new tender document
    const newTender = new Tender({
      title,
      department,
      description,
      type,
      deadline,
      fileUrl,
    });

    // Save the new tender
    await newTender.save();

    res.status(201).json({ message: "Tender added successfully", tender: newTender });
  } catch (err) {
    console.error("Error adding tender:", err);
    res.status(500).json({ message: "Server error, unable to add tender" });
  }
});

// Get all tenders (for public access)
router.get("/", async (req, res) => {
  try {
    const tenders = await Tender.find(); // Get all tenders from the database
    res.status(200).json(tenders); // Return the list of tenders
  } catch (err) {
    console.error("Error fetching tenders:", err);
    res.status(500).json({ message: "Failed to fetch tenders" });
  }
});

module.exports = router;
