const mongoose = require("mongoose");

const TenderSchema = new mongoose.Schema({
  title: String,
  department: String,
  description: String,
  type: String,
  deadline: Date,
  fileUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tender", TenderSchema);
