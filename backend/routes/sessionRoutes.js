const express = require("express");
const {createSession, getSessionById, getMySessions, deleteSession} = require("../controllers/sessionController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();

// Create Session
router.post("/create", protect, createSession);

// Get My Sessions
router.get("/my-sessions", protect, getMySessions);

// Get Session by ID
router.get("/:id", protect, getSessionById);

// Delete Session
router.delete("/:id", protect, deleteSession);

module.exports = router;