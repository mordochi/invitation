"use client";
import React, { useCallback, useState } from "react";
import "../../styles/shared.css";
import "./InvitationCard.css";

interface InvitationCardProps {
  coupleNames?: string;
  date?: string;
  venue?: string;
  time?: string;
  showMenu?: boolean;
  address?: string;
}

const InvitationCard: React.FC<InvitationCardProps> = ({
  coupleNames = "Happy Birthday",
  date = "Sep 6 2025",
  venue = "TO CELEBRATE Wen's Birthday",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
            <div className="menu-title">Menu</div>

            <div className="menu-section">
              <h3>STARTERS</h3>
              <p>
                starter number 1<br />
                entrées
              </p>
            </div>

            <div className="menu-section">
              <h3>MAIN DISHES</h3>
              <p>
                your main dish 1<br />
                delicious dishes
              </p>
            </div>

            <div className="menu-section">
              <h3>DESSERTS</h3>
              <p>
                tasty cakes
                <br />
                chocolate & fruits
              </p>
            </div>

            <div className="menu-couple-names">{coupleNames}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
