import React from 'react';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import PracticeQuestions from './components/PracticeQuestions';
import IllustrationSection from './components/IllustrationSection';
import './index.css';

function App() {
  return (
    <div className="sushruta-container">
      <Header />
      
      <div className="main-layout">
        <FeatureSection />
        <PracticeQuestions />
        <IllustrationSection />
      </div>
    </div>
  );
}

export default App;
