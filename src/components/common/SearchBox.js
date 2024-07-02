import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <div
      className="d-flex flex-row align-items-center rounded-5 gap-3"
      style={{
        padding: "12px 20px 12px 20px",
        backgroundColor: "#FFFFFF14",
        width: "300px",
      }}
    >
      <SearchIcon style={{ color: "#C5D3E4", height: "20px" }} />
      <div style={{ fontSize: "16px", lineHeight: "20px", color: "#C5D3E4" }}>
        Start exploring...
      </div>
    </div>
  );
};

export default SearchBox;
