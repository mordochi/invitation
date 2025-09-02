import { memo } from "react";

function TitleSparkles({ width }: { width: number }) {
  return (
    <div>
      {[...Array(Math.round(width * 2.3))].map((_, i) => {
        const size = 2 + Math.random() * 3.5;
        return (
          <div
            key={i}
            className="hidden-title-sparkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100 + (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10}%`,
              top: `${Math.random() * 100 + (Math.random() < 0.5 ? -1 : 1) * Math.random() * 14}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default memo(TitleSparkles);
