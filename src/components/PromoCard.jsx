import React from 'react';
import { Target } from 'lucide-react';

const PromoCard = () => {
  return (
    <div className="promo-card">
      <div className="promo-icon-box">
        <Target size={26} strokeWidth={2.2} />
      </div>
      <div className="promo-text">
        Practice today,<br />perform tomorrow.
      </div>
    </div>
  );
};

export default PromoCard;
