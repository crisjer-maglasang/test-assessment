import React from "react";
import { author } from "../constants/BestBookList";
import PublicIcon from "@mui/icons-material/Public";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import BuyButtons from "./common/BuyButtons";

const AuthorInfo = () => {
  return (
    <div
      className="d-flex flex-column py-4"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="d-flex flex-column justify-content-between align-content-center mx-auto">
        <div className="d-flex flex-column gap-3" style={{ width: "960px" }}>
          <div className="d-flex flex-row gap-4 align-items-center">
            <div className="d-flex flex-row gap-3 align-items-center">
              <div>
                <img
                  style={{ width: "60px", height: "60px" }}
                  alt={author.photo.alt}
                  src={author.photo.path}
                />
              </div>
              <h2
                style={{
                  fontSize: "32px",
                  lineHeight: "40px",
                  color: "#2E3440",
                }}
              >
                {author.name}
              </h2>
            </div>
            <div className="d-flex flex-row gap-2 align-items-center">
              <PublicIcon
                style={{ width: "32px", height: "32px", color: "#2E3440" }}
              />
              <TwitterIcon
                style={{ width: "32px", height: "32px", color: "#2E3440" }}
              />
              <YouTubeIcon
                style={{ width: "32px", height: "32px", color: "#2E3440" }}
              />
              <InstagramIcon
                style={{ width: "32px", height: "32px", color: "#2E3440" }}
              />
            </div>
          </div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "17px",
              lineHeight: "16px",
              color: "#2E3440",
            }}
          >
            Why am I passionate about this?
          </div>
          <div
            style={{ fontSize: "17px", lineHeight: "28px", color: "#2E3440" }}
          >
            {author.authorDescription}
          </div>
        </div>
        <div
          className="d-flex flex-row gap-4 pt-5 mx-auto"
          style={{ width: "960px" }}
        >
          <div>
            <img
              style={{
                width: "132px",
                height: "209px",
                boxShadow: "0px 6px 8px 0px #00000026 !important",
              }}
              alt={author.img.alt}
              src={author.img.path}
            />
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-row gap-3 align-items-center">
              <div
                style={{
                  fontSize: "25px",
                  lineHeight: "28px",
                  color: "#2E3440",
                }}
              >
                {author.bookTitle}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "#2E3440",
                }}
              >{`By ${author.bookAuthor}`}</div>
            </div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "17px",
                lineHeight: "16px",
                color: "#2E3440",
              }}
            >
              What is my book about
            </div>
            <div
              style={{ fontSize: "17px", lineHeight: "28px", color: "#2E3440" }}
            >
              {author.bookDescription}
              <span style={{ color: "#5477B2" }}> show more</span>
            </div>
            <BuyButtons />
            <div
              style={{ fontSize: "15px", lineHeight: "24px", color: "#6C757D" }}
            >
              Shepherd is reader supported. When you buy books, we may earn an
              affiliate commission
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
