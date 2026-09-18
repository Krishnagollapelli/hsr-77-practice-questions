import React from 'react';
import { ChevronDown } from 'lucide-react';
import { subjectsList, chaptersList, topicsList, difficultiesList } from '../data/questionsData';

const FilterBar = ({
  subject,
  setSubject,
  chapter,
  setChapter,
  topic,
  setTopic,
  difficulty,
  setDifficulty
}) => {
  return (
    <div className="filter-bar">
      {/* Row 1: Subject | Chapter */}
      <div className="filter-row">
        <div className="custom-select-wrapper">
          <select
            className="custom-select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            aria-label="Select Subject"
          >
            {subjectsList.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
          <ChevronDown className="select-arrow" size={16} />
        </div>

        <div className="custom-select-wrapper">
          <select
            className="custom-select"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            aria-label="Select Chapter"
          >
            {chaptersList.map((chap) => (
              <option key={chap} value={chap}>
                {chap}
              </option>
            ))}
          </select>
          <ChevronDown className="select-arrow" size={16} />
        </div>
      </div>

      {/* Row 2: Topic | Difficulty */}
      <div className="filter-row">
        <div className="custom-select-wrapper">
          <select
            className="custom-select"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            aria-label="Select Topic"
          >
            {topicsList.map((top) => (
              <option key={top} value={top}>
                {top}
              </option>
            ))}
          </select>
          <ChevronDown className="select-arrow" size={16} />
        </div>

        <div className="custom-select-wrapper">
          <select
            className="custom-select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            aria-label="Select Difficulty"
          >
            {difficultiesList.map((diff) => (
              <option key={diff} value={diff}>
                {diff}
              </option>
            ))}
          </select>
          <ChevronDown className="select-arrow" size={16} />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
