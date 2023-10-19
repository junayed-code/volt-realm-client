const styles = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
};

export default function StarRating({
  size = 24,
  color = "#FF8C47",
  maxRating = 5,
  ratingValue = 0,
  className = "",
}) {
  const floatPart = +(ratingValue - Math.floor(ratingValue)).toFixed(1);

  return (
    <div
      className={className}
      style={{ ...styles, fontSize: `${size}px`, gap: "0.5em" }}
    >
      <div style={{ ...styles, color }}>
        {Array.from({ length: maxRating }, (_, i) => {
          if (ratingValue >= i + 1) {
            return <StarFull key={`star-full-${i}`} />;
          }
          if (ratingValue > i) {
            if (floatPart > 0.3 && floatPart <= 0.7) {
              return <StarHalf key={`star-half-${i}`} />;
            }
            if (floatPart > 0.7) return <StarFull key={`star-full-${i}`} />;
          }

          return <StarEmpty key={`star-empty-${i}`} />;
        })}
      </div>
      <span style={{ fontWeight: 500, fontSize: "0.85em" }}>{ratingValue}</span>
    </div>
  );
}

function StarFull() {
  return (
    <svg
      style={{ cursor: "pointer" }}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z"></path>
    </svg>
  );
}

function StarHalf() {
  return (
    <svg
      style={{ cursor: "pointer" }}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-0.015 0.008 0.015-8.918 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"></path>
    </svg>
  );
}

function StarEmpty() {
  return (
    <svg
      style={{ cursor: "pointer" }}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-3.492 1.836 0.667-3.888-2.825-2.753 3.904-0.567 1.746-3.537 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"></path>
    </svg>
  );
}
