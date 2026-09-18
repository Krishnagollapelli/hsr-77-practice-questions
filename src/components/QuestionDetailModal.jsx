import React, { useState } from 'react';
import { X, CheckCircle2, XCircle } from 'lucide-react';

const QuestionDetailModal = ({ question, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  if (!question) return null;

  const { number, text, topic, difficulty, options, correctAnswerIndex, explanation } = question;

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-meta">
            <span className="number-indicator">{number}</span>
            <span className="badge topic-badge">{topic}</span>
            <span className={`badge difficulty-badge ${difficulty?.toLowerCase()}`}>
              {difficulty}
            </span>
          </div>
          <button className="close-modal-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-question-text">{text}</div>

        <div className="options-list">
          {options && options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === idx;
            const isCorrect = idx === correctAnswerIndex;
            
            let itemClass = 'option-item';
            if (selectedOption !== null) {
              if (isSelected) {
                itemClass += isCorrect ? ' selected-correct' : ' selected-wrong';
              }
            }

            return (
              <div
                key={idx}
                className={itemClass}
                onClick={() => handleOptionClick(idx)}
              >
                <span className="option-letter">{letter}</span>
                <span style={{ flex: 1 }}>{opt}</span>
                {selectedOption !== null && isSelected && (
                  isCorrect ? (
                    <CheckCircle2 size={18} color="#15803d" />
                  ) : (
                    <XCircle size={18} color="#be123c" />
                  )
                )}
              </div>
            );
          })}
        </div>

        {selectedOption !== null && (
          <div className="explanation-box">
            <div className="explanation-title">Explanation</div>
            <p>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionDetailModal;
