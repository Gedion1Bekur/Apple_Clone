// controllers/dbController.js
const express = require("express");
const router = express.Router();
const dbModel = require("../models/dbModel");

// Example route to test DB connection
router.get("/test-db", async (req, res) => {
  try {
    const result = await dbModel.testConnection();
    res.json(result);
  } catch (err) {
    res.status(500).send("DB connection failed");
  }
});

module.exports = router;
