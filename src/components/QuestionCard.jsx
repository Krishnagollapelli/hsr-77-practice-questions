import React from 'react';
import { ChevronRight } from 'lucide-react';

const QuestionCard = ({ question, onClick }) => {
  const { number, text, topic, difficulty } = question;

  const getDifficultyClass = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy':
        return 'easy';
      case 'medium':
        return 'medium';
      case 'hard':
        return 'hard';
      default:
        return 'medium';
    }
  };

  return (
    <div className="question-card" onClick={() => onClick(question)} role="button" tabIndex={0}>
      <div className="question-card-left">
        <div className="number-indicator">{number}</div>
        <div className="question-text-content" title={text}>
          {text}
        </div>
      </div>

      <div className="question-card-right">
        <span className="badge topic-badge">{topic}</span>
        <span className={`badge difficulty-badge ${getDifficultyClass(difficulty)}`}>
          {difficulty}
        </span>
        <ChevronRight size={18} className="arrow-icon" />
      </div>
    </div>
  );
};

export default QuestionCard;
