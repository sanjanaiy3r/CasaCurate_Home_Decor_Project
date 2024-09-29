import React, { useState } from 'react';
import QuizQuestion from '../components/QuizQuestion';

const quizQuestions = [
  {
    question: "Which living room style do you prefer?",
    options: [
      { imageUrl: "/path/to/modern-living-room.jpg", text: "Modern" },
      { imageUrl: "/path/to/traditional-living-room.jpg", text: "Traditional" }
    ]
  },
  // Add more questions here
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished, calculate result
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Implement your logic to determine the user's aesthetic based on answers
    console.log("Quiz finished, answers:", answers);
    // You could send this data to the backend for processing
  };

  return (
    <div className="quiz">
      <h2>What's Your Aesthetic?</h2>
      {currentQuestion < quizQuestions.length ? (
        <QuizQuestion
          question={quizQuestions[currentQuestion].question}
          options={quizQuestions[currentQuestion].options}
          onSelect={handleAnswer}
        />
      ) : (
        <div>Quiz completed! We're calculating your style profile.</div>
      )}
    </div>
  );
}

export default Quiz;