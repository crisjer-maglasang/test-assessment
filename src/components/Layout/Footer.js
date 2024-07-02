import React from "react";
import { ReactComponent as Logo } from "../../assets/images/footer_logo.svg";

const Footer = () => (
  <div
    className="container-fluid text-white"
    style={{ backgroundColor: "#2E3440" }}
  >
    <div className="row">
      <div
        className="col-12 col-sm-3 border-right sm:border-bottom py-4 ps-4"
        style={{ color: "#8A98A8" }}
      >
        <Logo />
        <div style={{ paddingTop: "16px" }}>Copyright 2023 - Shepherd.com</div>
        <div style={{ paddingTop: "16px" }}>NLP Powered by Wikifier.org</div>
        <div style={{ paddingTop: "16px" }}>
          Shepherd is a participant in the Bookshop.org and Amazon
          <br />
          Associate Affiliate Programs. As a participant, we may earn from
          qualifying purchases made on those sites
        </div>
      </div>
      <div className="col-12 col-sm-3 border-right sm:border-bottom py-4 ps-4">
        <h5 style={{ fontSize: "21px", lineHeight: "28px" }}>Discover</h5>
        <div style={{ paddingTop: "16px" }}>Discover The Best Books</div>
        <div style={{ paddingTop: "16px" }}>Follow Our Development</div>
      </div>
      <div className="col-12 col-sm-3 border-right sm:border-bottom py-4 ps-4">
        <h5 style={{ fontSize: "21px", lineHeight: "28px" }}>About</h5>
        <div style={{ paddingTop: "16px" }}>Out Story</div>
        <div style={{ paddingTop: "16px" }}>For Authors</div>
        <div style={{ paddingTop: "16px" }}>Media Inquiries</div>
        <div style={{ paddingTop: "16px" }}>Contact Us</div>
        <div style={{ paddingTop: "16px" }}>Become Founding Member</div>
        <div style={{ paddingTop: "16px" }}>Donate</div>
      </div>
      <div className="col-12 col-sm-3 py-4 ps-4">
        {" "}
        <h5 style={{ fontSize: "21px", lineHeight: "28px" }}>Legal</h5>
        <div style={{ paddingTop: "16px" }}>Affiliate Disclosure</div>
        <div style={{ paddingTop: "16px" }}>Privacy Policy</div>
        <div style={{ paddingTop: "16px" }}>Terms & Conditions</div>
        <div style={{ paddingTop: "16px" }}>Website Disclosure</div>
      </div>
    </div>
  </div>
);

export default Footer;
