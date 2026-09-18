import React from 'react';
import { FileText, Layers, SlidersHorizontal, Zap, HelpCircle } from 'lucide-react';

const iconMap = {
  FileText: FileText,
  Layers: Layers,
  SlidersHorizontal: SlidersHorizontal,
  Zap: Zap
};

const FeatureCard = ({ title, description, iconName }) => {
  const IconComponent = iconMap[iconName] || HelpCircle;

  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        <IconComponent size={20} strokeWidth={2} />
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
