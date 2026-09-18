import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionList = ({ questions, onSelectQuestion }) => {
  if (!questions || questions.length === 0) {
    return (
      <div className="empty-questions">
        No questions found for the selected filter combination. Try adjusting your subject, topic, or difficulty settings.
      </div>
    );
  }

  return (
    <div className="question-list">
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} onClick={onSelectQuestion} />
      ))}
    </div>
  );
};

export default QuestionList;
