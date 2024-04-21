// src/routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const {handleSubmitQuiz,handleGetQuiz}=require("../controllers/quiz")
// GET /quiz route - Serve quiz questions
router.get('/quiz',handleGetQuiz)

// POST /submit route - Handle quiz submissions
router.post('/submit',handleSubmitQuiz);

module.exports = router;
