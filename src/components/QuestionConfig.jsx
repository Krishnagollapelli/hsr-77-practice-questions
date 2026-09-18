import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';

const QuestionConfig = ({ totalQuestions = 20 }) => {
  const INITIAL_SECONDS = 30 * 60; // 30 minutes
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const formatTime = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const formattedMins = String(mins).padStart(2, '0');
    const formattedSecs = String(secs).padStart(2, '0');
    return `${formattedMins}:${formattedSecs}`;
  };

  const handleStartToggle = () => {
    if (secondsLeft === 0) {
      setSecondsLeft(INITIAL_SECONDS);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setIsRunning(false);
    setSecondsLeft(INITIAL_SECONDS);
  };

  return (
    <div className="question-config-bar">
      <div className="config-info">
        <span className="questions-count-badge">
          {totalQuestions} Questions
        </span>
        <div className={`timer-badge ${isRunning ? 'running' : ''}`}>
          <Clock size={16} />
          <span>{formatTime(secondsLeft)}</span>
          {secondsLeft < INITIAL_SECONDS && (
            <button
              onClick={handleReset}
              title="Reset Timer"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                color: 'inherit',
                marginLeft: '4px'
              }}
            >
              <RotateCcw size={13} />
            </button>
          )}
        </div>
      </div>

      <button className="start-btn" onClick={handleStartToggle}>
        {isRunning ? (
          <>
            <Pause size={16} fill="currentColor" />
            Pause
          </>
        ) : (
          <>
            <Play size={16} fill="currentColor" />
            Start
          </>
        )}
      </button>
    </div>
  );
};

export default QuestionConfig;
