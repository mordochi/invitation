import { useEffect, useState } from "react";
import TitleSparkles from "./TitleSparkles";

export default function HiddenTitle({
  width = 35,
  time,
  title,
  isInView,
  revealTime,
}: {
  width?: number;
  time?: string;
  title?: string;
  isInView?: boolean;
  revealTime?: Date;
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  // Key to store whether this title has been seen
  const seenKey = title ? `invitation-card-title-seen:${title}` : undefined;

  // Read seen flag on mount/title change
  useEffect(() => {
    if (!seenKey) return;
    try {
      const val =
        typeof window !== "undefined"
          ? window.localStorage.getItem(seenKey)
          : null;
      if (val === "true") {
        setHasSeen(true);
      } else {
        setHasSeen(false);
      }
    } catch {
      // ignore storage errors
    }
  }, [seenKey]);

  useEffect(() => {
    if (!isInView) return;
    // If already seen, skip animation entirely
    if (hasSeen) return;

    if (!revealTime) {
      setShouldAnimate(true);
      return;
    }

    let interval: NodeJS.Timeout | undefined = undefined;

    const checkTime = () => {
      const now = new Date();
      if (now.valueOf() >= revealTime.valueOf()) {
        setShouldAnimate(true);
        if (interval) clearInterval(interval);
      }
    };

    // Check immediately
    checkTime();

    // Check every second
    interval = setInterval(checkTime, 1000);

    return () => clearInterval(interval);
  }, [isInView, revealTime, hasSeen]);

  const handleAnimationEnd = () => {
    if (!seenKey) return;
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(seenKey, "true");
      }
    } catch {
      // ignore storage errors
    }
    setHasSeen(true);
  };

  return (
    <div className="hidden-title-container">
      <div className="activity-time">{time}</div>
      <div className="hidden-title" style={{ width: `${width}%` }}>
        {title && (
          <div
            className={`hidden-title-text ${hasSeen ? "visible" : shouldAnimate ? "animate" : ""}`}
          >
            {title}
          </div>
        )}
        {!hasSeen && (
          <div
            className={`hidden-title-sparkles ${shouldAnimate ? "animate" : ""}`}
            onAnimationEnd={shouldAnimate ? handleAnimationEnd : undefined}
          >
            <TitleSparkles width={width} />
          </div>
        )}
      </div>
    </div>
  );
}
