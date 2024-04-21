Node.js Quiz Application

This project is a simple Node.js quiz application designed to serve quiz questions, allow users to submit their answers, and provide feedback on their performance. Users can interact with the quiz through a web interface and receive immediate feedback on their answers.

Features:

- Serve quiz questions dynamically from a JSON file.
- Accept user submissions and calculate scores based on the provided answers.
- Provide feedback to users on their performance, including correct and incorrect answers.
- Easy setup and deployment for local development or production environments.

Installation:

1. Clone the repository to your local machine:
    git clone <repository-url>

2. Navigate to the project directory:
    cd Node_QUIZAPP

3. Install dependencies using npm:
    npm install

Usage:

To start the server and run the application locally, use the following command:

npm start

By default, the server will run on port 3000. You can specify a different port by setting the PORT environment variable before starting the server.

Once the server is running, open a web browser and navigate to http://localhost:3000 (or the port you specified). You will see the quiz interface, where you can select your answers for each question and submit them. After submitting your answers, the application will display your score and provide feedback on each question below the submit button.

Project Structure:

- server.js: Entry point of the Node.js server.
- src/routes/quizRoutes.js: Defines routes for serving quiz questions and handling quiz submissions.
- src/controllers/quiz.js: Contains controller functions for handling quiz-related requests.
- public/index.html: HTML file for the quiz interface.
- data/quizData.json: JSON file containing quiz questions and answers.

Technologies Used:

- Node.js
- Express.js
- HTML
- CSS
- JavaScript


