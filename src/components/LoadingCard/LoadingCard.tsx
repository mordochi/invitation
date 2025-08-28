import React from "react";
import "./LoadingCard.css";

const LoadingCard: React.FC = () => {
  return (
    <div className="invitation-container">
      <div className="loading-card">
        <div className="loading-content">
          {/* Shimmer circle placeholder */}
          <div className="loading-circle">
            <div className="loading-shimmer"></div>
          </div>

          {/* Loading text lines */}
          <div className="loading-lines">
            <div className="loading-line short"></div>
            <div className="loading-line medium"></div>
            <div className="loading-line long"></div>
          </div>
        </div>

        {/* Sparkles animation */}
        <div className="loading-sparkles">
          <div
            className="loading-sparkle"
            style={{ top: "20%", left: "15%", animationDelay: "0s" }}
          ></div>
          <div
            className="loading-sparkle"
            style={{ top: "60%", right: "20%", animationDelay: "1s" }}
          ></div>
          <div
            className="loading-sparkle"
            style={{ top: "80%", left: "25%", animationDelay: "2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
