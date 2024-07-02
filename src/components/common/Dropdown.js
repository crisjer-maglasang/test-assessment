import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

const Dropdown = () => {
  return (
    <div
      className="ps-3 py-2 d-flex flex-row gap-1 align-items-center"
      style={{
        border: "1px solid var(--Colors-Blue-Middle-Blue, #C5D3E4)",
        borderRadius: "5px",
        color: "#C5D3E4",
      }}
    >
      <div
        className=""
        style={{ 
          fontSize: "15px",
          lineHeight: "24px",
          fontWeight: "400",
          color: "#5477B2",
        }}
      >
        Explore this book
      </div>
      <KeyboardArrowDown style={{ color: "#5477B2" }} />
    </div>
  );
};

export default Dropdown;
