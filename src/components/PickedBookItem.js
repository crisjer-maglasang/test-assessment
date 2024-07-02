import { Link } from "react-router-dom";
import photo from "../assets/images/photo.png";
import BuyButtons from "./common/BuyButtons";
import Dropdown from "./common/Dropdown";

const PickedBookItem = ({
  img,
  title,
  author,
  link,
  description,
  linkTitle,
}) => {
  return (
    <div
      className="d-flex flex-row justify-content-between"
      style={{ width: "960px", color: "#2E3440" }}
    >
      <div>
        <img
          style={{
            width: "245px",
            height: "400px",
            boxShadow: "0px 6px 8px 0px #00000026 !important",
          }}
          alt={img.alt}
          src={img.path}
        />
      </div>
      <div
        className="d-flex flex-column"
        style={{ gap: "16px", width: "596px" }}
      >
        <div>
          <h3 style={{ fontSize: "25px", lineHeight: "36px" }}>{title}</h3>
          <div style={{ fontSize: "15px", lineHeight: "24px" }}>
            By {author}
            {linkTitle && <Link to={link}>{` ${linkTitle}`}</Link>}
          </div>
        </div>
        <div className="d-flex flex-row gap-1 align-items-center">
          <div>
            <img
              style={{ width: "32px", height: "32px" }}
              alt="people 1"
              src={photo}
            />
          </div>
          <div
            style={{
              fontSize: "17px",
              lineHeight: "28px",
              fontWeight: "700",
            }}
          >
            Why did I love this book?
          </div>
        </div>
        <div style={{ fontSize: "17px", lineHeight: "28px" }}>
          {description}
        </div>
        <Dropdown />
        <BuyButtons />
      </div>
    </div>
  );
};

export default PickedBookItem;
