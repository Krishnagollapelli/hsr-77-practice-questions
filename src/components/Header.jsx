import React from 'react';
import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="sushruta-header">
      <div className="brand-wrapper">
        <div className="brand-icon">
          <Activity size={18} strokeWidth={2.5} />
        </div>
        <h1 className="brand-title">SUSHRUTA</h1>
      </div>
      <p className="header-subtitle">Your NEET Preparation Companion</p>
      <h2 className="header-main-heading">
        Practice chapter-wise questions to strengthen your concepts.
      </h2>
    </header>
  );
};

export default Header;
