import React from "react";
import BuyButtons from "./common/BuyButtons";

const MyBook = ({ title, author, img, description }) => {
  return (
    <div
      className="d-flex flex-column mx-auto"
      style={{ width: "960px", gap: "40px", color: "#2E3440" }}
    >
      <h2 style={{ fontSize: "32px", lineHeight: "40px" }}>
        Don't forget about my book 😀
      </h2>
      <div className="d-flex flex-row justify-content-between">
        <div
          className="d-flex flex-column"
          style={{ width: "744px", gap: "16px" }}
        >
          <h3 style={{ fontSize: "25px", lineHeight: "28px" }}>{title}</h3>
          <div
            style={{ fontSize: "15px", lineHeight: "24px" }}
          >{`By ${author}`}</div>
          <div
            style={{ fontSize: "17px", lineHeight: "16px", fontWeight: "700" }}
          >
            What is my book about?
          </div>
          <div style={{ fontSize: "17px", lineHeight: "28px" }}>
            {description}
          </div>
          <BuyButtons />
        </div>
        <div>
          <img
            alt={img.alt}
            src={img.path}
            style={{
              width: "176px",
              height: "279px",
              boxShadow: "0px 6px 8px 0px #00000026 !important",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyBook;
