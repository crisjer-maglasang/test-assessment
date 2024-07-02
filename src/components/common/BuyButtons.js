import React from "react";
import { AutoStoriesOutlined } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

const BuyButtons = () => {
  return (
    <div className="d-flex flex-row" style={{ width: "320px", gap: "12px" }}>
      <div
        className="d-flex flex-row justify-content-center align-items-center rounded-5"
        style={{
          width: "154px",
          height: "32px",
          gap: "16px",
          border: "1px solid var(--Colors-Grey-Grey, #D1D8E1)",
        }}
      >
        <AutoStoriesOutlined style={{ width: "18px", height: "18px" }} />
        <div
          style={{
            fontSize: "15px",
            lineHeight: "16px",
            fontWeight: "700",
            color: "#2E3440",
          }}
        >
          Preview
        </div>
      </div>
      <div
        className="d-flex flex-row"
        style={{
          width: "154px",
          height: "32px",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center rounded-start-5"
          style={{
            width: "126px",
            border: "1px solid var(--Colors-Other-Shepherd-Green, #A3BE8C)",
            backgroundColor: "#CEE2BD",
            fontSize: "15px",
            lineHeight: "16px",
            fontWeight: "700",
          }}
        >
          Amazon
        </div>
        <div
          className="rounded-end-5 d-flex justify-content-center align-items-center"
          style={{
            width: "27px",
            border: "1px solid var(--Colors-Other-Shepherd-Green, #A3BE8C)",
            backgroundColor: "#CEE2BD",
          }}
        >
          <KeyboardArrowDown style={{ fontWeight: "400", color: "#2E3440" }} />
        </div>
      </div>
    </div>
  );
};

export default BuyButtons;
