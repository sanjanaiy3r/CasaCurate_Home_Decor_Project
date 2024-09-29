import React from 'react';

function QuizQuestion({ question, options, onSelect }) {
  return (
    <div className="quiz-question">
      <h3>{question}</h3>
      <div className="quiz-options">
        {options.map((option, index) => (
          <button key={index} onClick={() => onSelect(option)}>
            <img src={option.imageUrl} alt={option.text} />
            <p>{option.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;
