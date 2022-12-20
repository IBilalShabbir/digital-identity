import React from "react";

function FeatureCard({ icon, heading, text }) {
  return (
    <div className="features__card">
      <div className="feature__card__icon">{icon}</div>
      <div className="feature__card__heading">{heading}</div>
      <div className="feature__card__subheading">{text}</div>
    </div>
  );
}
export default FeatureCard;
