import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import SearchBox from "../common/SearchBox";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = () => {
  const headerItems = [
    {
      name: "Fiction",
      path: "#",
    },
    {
      name: "Nonfiction",
      path: "#",
    },
    {
      name: "Kids",
      path: "#",
    },
    {
      name: "YA",
      path: "#",
    },
    {
      name: "Best Books 2024",
      path: "#",
    },
    {
      name: "My Book DNA",
      path: "#",
    },
  ];

  return (
    <div className="text-white p-3 d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex flex-row align-items-center">
        <Link className="" href="#">
          <Logo />
        </Link>

        <div className="d-md-none d-lg-flex flex-row justify-content-between ps-5">
          <div className="d-flex flex-row gap-4">
            {headerItems.map((item, index) => (
              <Link
                className="text-decoration-none"
                to={item.path}
                key={index}
                style={{ color: "#C5D3E4" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-row align-items-center"
        style={{ gap: "28px" }}
      >
        <SearchBox />
        <div
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: "44px",
            height: "44px",
            backgroundColor: "#FFFFFF14",
          }}
        >
          <AccountCircleOutlinedIcon
            style={{ width: "28px", height: "28px", color: "#C5D3E4" }}
          />
        </div>
        <MenuOutlinedIcon
          style={{ width: "36px", height: "36px", color: "#C5D3E4" }}
        />
      </div>
    </div>
  );
};

export default Header;
