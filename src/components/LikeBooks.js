import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { recommendedBooks } from "../constants/BestBookList";
import { Link } from "react-router-dom";
import BooksCard from "./common/BooksCard";

const LikeBooks = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ paddingTop: "40px", paddingBottom: "40px", gap: "40px" }}
    >
      <div
        className="d-flex flex-column gap-2 mx-auto justify-content-center"
        style={{ width: "960px" }}
      >
        <h2 style={{ fontSize: "32px", lineHeight: "40px", color: "#2E3440" }}>
          Here are 5 book lists we think you will like!
        </h2>{" "}
        <div
          className="divide-x"
          style={{
            border: "1px solid var(--Colors-Blue-Ligher-Middle-Blue, #D8DEEE)",
            borderRadius: "5px",
          }}
        >
          {recommendedBooks.map((book) => (
            <div className="d-flex flex-row p-3 gap-3 justify-content-between align-items-center ">
              <div className="d-flex flex-row gap-3 align-items-center">
                <div>
                  <img alt={book.author.alt} src={book.author.path} />
                </div>
                <Link
                  className="text-decoration-none"
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#5477B2",
                  }}
                >
                  {book.description}
                </Link>
              </div>
              <div
                className="d-flex flex-row"
                style={{ height: "72px", gap: "12px" }}
              >
                {book.books.map((el) => (
                  <div>
                    <img alt={el.alt} src={el.path} />
                  </div>
                ))}
              </div>
            </div>
          ))}{" "}
        </div>
        <div
          className="py-2 d-flex flex-row gap-2 rounded-5 justify-content-center align-items-center"
          style={{ backgroundColor: "#F3F3F3" }}
        >
          <div
            style={{
              fontSize: "16px",
              lineHeight: "16px",
              fontWeight: "700",
              color: "#2E3440",
            }}
          >
            Show more book lists
          </div>
          <KeyboardArrowDown />
        </div>
      </div>
      <div className="d-flex flex-column gap-4" style={{ width: "960px" }}>
        <div style={{ fontSize: "32px", lineHeight: "40px" }}>
          Interested in Vikings, foster care and mic topics
        </div>
        <div className="d-flex flex-row" style={{ gap: "30px" }}>
          <div className="d-flex flex-column gap-3">
            <BooksCard bookType="Vikings" color="#5477B2" />
            <BooksCard bookType="Mice" color="#C48A70" />
            <BooksCard bookType="Geeks" color="#A3BE8C" />
          </div>
          <div className="d-flex flex-column gap-3">
            <BooksCard bookType="Foster care" color="#BF616A" />
            <BooksCard bookType="Teens" color="#E4CC8A" />
            <BooksCard bookType="Animals" color="#5477B2" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-4" style={{ width: "960px" }}>
        <div style={{ fontSize: "32px", lineHeight: "40px" }}>
          Interested in fantasy, adventure, or action genres?
        </div>
        <div className="d-flex flex-row" style={{ gap: "30px" }}>
          <div className="d-flex flex-column gap-3">
            <BooksCard bookType="Fantasy" color="#5477B2" />
            <BooksCard bookType="Action" color="#C48A70" />
            <BooksCard bookType="Detective" color="#A3BE8C" />
          </div>
          <div className="d-flex flex-column gap-3">
            <BooksCard bookType="Adventure" color="#BF616A" />
            <BooksCard bookType="Fiction" color="#E4CC8A" />
            <BooksCard bookType="Historical Fiction" color="#5477B2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeBooks;
