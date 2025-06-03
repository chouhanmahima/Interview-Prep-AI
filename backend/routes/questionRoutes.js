const express = require("express");
const {togglePinQuestion, updateQuestionNote, addQuestionsToSession} = require("../controllers/questionController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();

// Add Questions to Session
router.post("/add", protect, addQuestionsToSession);

// Toggle Pin Question
router.post("/:id/pin", protect, togglePinQuestion);

// Add Question Note
router.post("/:id/note", protect, updateQuestionNote);

module.exports = router;