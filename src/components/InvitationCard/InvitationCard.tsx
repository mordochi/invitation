"use client";
import React, { useCallback, useState } from "react";
import "./InvitationCard.css";
import FirstTimeHint from "./FirstTimeHint";
import HiddenTitle from "./HiddenTitle";

interface InvitationCardProps {
  coupleNames?: string;
  date?: string;
  venue?: string;
}

const InvitationCard: React.FC<InvitationCardProps> = ({
  coupleNames = "Happy Birthday",
  date = "Sep 6 2025",
  venue = "TO CELEBRATE Wen's Birthday",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const toggleFlip = useCallback(() => setIsFlipped((v) => !v), []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    },
    [toggleFlip],
  );

  return (
    <div className="invitation-container">
      <div
        className={`card-flip ${isFlipped ? "is-flipped" : ""}`}
        onClick={toggleFlip}
        role="button"
        aria-pressed={isFlipped}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* Front Face - Invitation */}
        <div className="card-face invitation-card front">
          <div className="sparkles">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="card-content">
            <div className="venue-text">{venue}</div>

            <div className="names-circle">
              <div className="couple-names">{coupleNames}</div>
            </div>

            <div className="date-text">{date}</div>
            <div className="address-text">
              1 F., No. 4, Aly. 16, Ln. 216,
              <br />
              Jiaxing St., Xinyi Dist., Taipei City
            </div>
            <div className="dress-code-text">
              Dress Code: Black<p>Whatever makes you shine!</p>
            </div>
          </div>
        </div>

        {/* Back Face - Menu */}
        <div className="card-face menu-card back">
          <div className="sparkles">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="menu-content">
            <div className="menu-title">Wen?</div>

            <div className="activity-container">
              <div className="menu-section">
                <HiddenTitle
                  width={44}
                  time="11:30 - 12:15"
                  title="蛋糕 & 禮物"
                  revealTime={new Date("2025-09-06T11:30:00")}
                  isInView={isFlipped}
                />
                <p>啟程、橘、莓</p>
              </div>

              <div className="menu-section">
                <HiddenTitle
                  width={25}
                  time="12:30 - 13:45"
                  title="桔梗"
                  revealTime={new Date("2025-09-06T12:30:00")}
                  isInView={isFlipped}
                />
                <p>喘息、歐風、綠意</p>
              </div>

              <div className="menu-section">
                <HiddenTitle
                  width={33}
                  time="14:00 - 17:00"
                  title="Painting Stage"
                  revealTime={new Date("2025-09-06T14:00:00")}
                  isInView={isFlipped}
                />
                <p>沉浸、層次、意外</p>
              </div>

              <div className="menu-section">
                <HiddenTitle
                  width={57}
                  time="18:00 - 21:00"
                  title="一宗壽司"
                  revealTime={new Date("2025-09-06T18:00:00")}
                  isInView={isFlipped}
                />
                <p>驚喜、技藝、純粹</p>
              </div>

              <div className="menu-section">
                <HiddenTitle
                  time="21:15 - 22:00"
                  title="Belinda Coffee"
                  revealTime={new Date("2025-09-06T21:15:00")}
                  isInView={isFlipped}
                />
                <p>餘韻、浸潤、呼嚕</p>
              </div>
            </div>

            <div className="menu-couple-names">{coupleNames}</div>
          </div>
        </div>

        {/* First Time Hint Overlay */}
        {showHint && <FirstTimeHint onDismiss={() => setShowHint(false)} />}
      </div>
    </div>
  );
};

export default InvitationCard;
