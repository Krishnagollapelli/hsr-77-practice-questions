import React, { useState } from 'react';
import QuestionTabs from './QuestionTabs';
import FilterBar from './FilterBar';
import QuestionConfig from './QuestionConfig';
import QuestionList from './QuestionList';
import QuestionDetailModal from './QuestionDetailModal';
import { questionsData } from '../data/questionsData';

const PracticeQuestions = () => {
  const [activeTab, setActiveTab] = useState('MCQs');
  const [subject, setSubject] = useState('Biology');
  const [chapter, setChapter] = useState('Cell: The Unit of Life');
  const [topic, setTopic] = useState('All Topics');
  const [difficulty, setDifficulty] = useState('All Difficulties');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Filter questions based on active tab and dropdown selections
  const filteredQuestions = questionsData.filter((q) => {
    // Tab filter
    if (activeTab === 'MCQs' && q.tabCategory !== 'MCQs') return false;
    if (activeTab === 'Previous Year' && q.tabCategory !== 'Previous Year') return false;
    if (activeTab === 'Subjective' && q.tabCategory !== 'Subjective') return false;
    if (activeTab === 'Mixed' && q.tabCategory !== 'Mixed') return false;

    // Subject filter
    if (subject && q.subject !== subject) return false;

    // Chapter filter
    if (chapter && q.chapter !== chapter) return false;

    // Topic filter
    if (topic && topic !== 'All Topics' && q.topic !== topic) return false;

    // Difficulty filter
    if (difficulty && difficulty !== 'All Difficulties' && q.difficulty !== difficulty) return false;

    return true;
  });

  return (
    <main className="center-practice-section">
      <div className="practice-card-header">
        <h2 className="practice-card-title">Practice Questions</h2>
        <span className="practice-badge">NEET UG 2026</span>
      </div>

      <QuestionTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <FilterBar
        subject={subject}
        setSubject={setSubject}
        chapter={chapter}
        setChapter={setChapter}
        topic={topic}
        setTopic={setTopic}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      <QuestionConfig totalQuestions={20} />

      <QuestionList
        questions={filteredQuestions}
        onSelectQuestion={(q) => setSelectedQuestion(q)}
      />

      {selectedQuestion && (
        <QuestionDetailModal
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
        />
      )}
    </main>
  );
};

export default PracticeQuestions;
