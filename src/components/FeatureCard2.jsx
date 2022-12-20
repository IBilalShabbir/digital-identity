import React from "react";

function FeatureCard2({ icon, heading, text }) {
  return (
    <div className="features__card2">
      <div className="feature__card2__icon">{icon}</div>
      <div className="feature__card2__text2">
        <div className="feature__card2__heading">{heading}</div>
        <div className="feature__card2__subheading">{text}</div>
      </div>
    </div>
  );
}
export default FeatureCard2;
