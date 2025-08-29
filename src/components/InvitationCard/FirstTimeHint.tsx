"use client";
import React, { useEffect, useState } from "react";
import "./FirstTimeHint.css";
import { TbHandClick } from "react-icons/tb";

interface FirstTimeHintProps {
  onDismiss: () => void;
}

const FirstTimeHint: React.FC<FirstTimeHintProps> = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the hint before
    const hasSeenHint = localStorage.getItem("invitation-card-hint-seen");

    if (!hasSeenHint) {
      // Show hint after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("invitation-card-hint-seen", "true");
    onDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="first-time-hint-overlay" onClick={handleDismiss}>
      <div className="hint-content">
        <div className="click-icon">
          <TbHandClick size="64" color="white" />
        </div>
      </div>
    </div>
  );
};

export default FirstTimeHint;
