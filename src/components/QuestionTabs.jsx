import React from 'react';

const tabs = ['MCQs', 'Previous Year', 'Subjective', 'Mixed'];

const QuestionTabs = ({ activeTab, onTabChange }) => {
  return (
    <nav className="question-tabs-nav" aria-label="Question Type Tabs">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            className={`tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
};

export default QuestionTabs;
