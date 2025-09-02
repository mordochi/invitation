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

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView, revealTime, title]);

  return (
    <div className="hidden-title-container">
      <div className="activity-time">{time}</div>
      <div className="hidden-title" style={{ width: `${width}%` }}>
        {title && (
          <div
            className={`hidden-title-text ${shouldAnimate ? "animate" : ""}`}
          >
            {title}
          </div>
        )}
        <div
          className={`hidden-title-sparkles ${shouldAnimate ? "animate" : ""}`}
        >
          <TitleSparkles width={width} />
        </div>
      </div>
    </div>
  );
}
