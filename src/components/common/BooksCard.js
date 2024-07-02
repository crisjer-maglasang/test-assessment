import React from "react";

const BooksCard = ({ bookType, color }) => {
  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center"
      style={{
        padding: "16px 16px 16px 20px",
        width: "465px",
        border: "1px solid var(--Colors-Blue-Ligher-Middle-Blue, #D8DEEE)",
        borderLeft: `3px solid ${color}`,
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          color: "#5477B2",
        }}
      >
        {bookType}
      </div>
      <div
        style={{
          fontSize: "15px",
          lineHeight: "16px",
          color: "#8A98A8",
        }}
      >
        240 books
      </div>
    </div>
  );
};

export default BooksCard;
