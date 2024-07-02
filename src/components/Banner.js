import Header from "./Layout/Header";
import book1 from "../assets/images/book1.png";
import book2 from "../assets/images/book2.png";
import book3 from "../assets/images/book3.png";
import book4 from "../assets/images/book4.png";
import book5 from "../assets/images/book5.png";
import photo from "../assets/images/photo.png";
import { KeyboardArrowDown } from "@mui/icons-material";

const Banner = () => {
  return (
    <div
      className="banner-background d-flex flex-column text-white "
      style={{ gap: "40px", paddingBottom: "40px" }}
    >
      <Header />
      <div
        className="d-flex flex-column gap-2"
        style={{ paddingInline: "122px" }}
      >
        <h1
          className="text-center"
          style={{ fontSize: "50px", lineHeight: "72px" }}
        >
          The best new action-packed middle <br /> grade books with heart
        </h1>
        <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
          <div>
            <img
              style={{ height: "60px", width: "60px" }}
              alt="people1"
              src={photo}
            />
          </div>
          <h3
            className="text-center"
            style={{ fontSize: "25px", lineHeight: "28px", color: "#E4CC8A" }}
          >
            Picked by Ben Gartner
          </h3>
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-center gap-1"
        style={{ paddingLeft: "122px", paddingRight: "122px" }}
      >
        <div>
          <img alt="book1" className="img-fluid" src={book1} />
        </div>
        <div>
          <img alt="book2" className="img-fluid" src={book2} />
        </div>
        <div>
          <img alt="book3" className="img-fluid" src={book3} />
        </div>
        <div>
          <img alt="book4" className="img-fluid" src={book4} />
        </div>
        <div>
          <img alt="book5" className="img-fluid" src={book5} />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center gap-2 align-items-center">
        <h2
          className="text-center"
          style={{ fontSize: "32px", lineHeight: "40px", color: "#E4CC8A" }}
        >
          What did I love about each book
        </h2>
        <KeyboardArrowDown style={{ color: "#E4CC8A" }} />
      </div>
    </div>
  );
};

export default Banner;
