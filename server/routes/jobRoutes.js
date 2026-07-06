const express = require("express");

const router = express.Router();

const {
  getJobs,
  addJob,
} = require("../controllers/jobController");

// Get All Jobs
router.get("/", getJobs);

// Add Job
router.post("/", addJob);

module.exports = router;