const quizData=require("../data/quizData.json")

async function handleGetQuiz(req,res){
   return res.json(quizData);
}


async function handleSubmitQuiz(req,res){
        const userAnswers = req.body.answers;
        let score = 0;
        const results = [];
      
        quizData.forEach((question, index) => {
          const correctAnswerIndex = question.answerIndex;
          const userAnswerIndex = userAnswers[index];
      
          const result = {
            question: question.question,
            userAnswer: question.options[userAnswerIndex],
            correctAnswer: question.options[correctAnswerIndex],
            correct: userAnswerIndex === correctAnswerIndex
          };
      
          if (result.correct) {
            score++;
          }
      
          results.push(result);
        });
      
        res.json({ score, results });
      };



module.exports={
  handleGetQuiz,  
  handleSubmitQuiz
}