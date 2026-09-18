import React from 'react';
import FeatureCard from './FeatureCard';
import { featuresData } from '../data/featuresData';

const FeatureSection = () => {
  return (
    <aside className="left-feature-section">
      <div className="feature-cards-grid">
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            iconName={feature.iconName}
          />
        ))}
      </div>
      
      <div className="feature-footer-quote">
        <div className="quote-line-1">Better Students</div>
        <div className="quote-line-2">Brighter Doctors</div>
      </div>
    </aside>
  );
};

export default FeatureSection;
