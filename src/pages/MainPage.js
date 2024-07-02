import React from "react";
import Banner from "../components/Banner";
import AuthorInfo from "../components/AuthorInfo";
import { booksList, myBook } from "../constants/BestBookList";
import PickedBookItem from "../components/PickedBookItem";
import MyBook from "../components/MyBook";
import LikeBooks from "../components/LikeBooks";

const MainPage = () => (
  <div className="d-flex flex-column flex-grow-1">
    <Banner />
    <AuthorInfo />
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ paddingTop: "40px", paddingBottom: "40px", gap: "40px" }}
    >
      {booksList.map(({ img, description, title, author, link, linkTitle }) => (
        <PickedBookItem
          img={img}
          title={title}
          description={description}
          author={author}
          link={link}
          linkTitle={linkTitle}
        />
      ))}
    </div>
    <div
      className=" d-flex flex-column justify-content-center align-content-center py-4"
      style={{
        backgroundColor: "#F8F8F8",
      }}
    >
      <MyBook
        title={myBook.title}
        author={myBook.author}
        description={myBook.description}
        img={myBook.img}
      />
    </div>
    <LikeBooks />
  </div>
);

export default MainPage;
