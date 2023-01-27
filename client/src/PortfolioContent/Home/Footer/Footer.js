import React from "react";
import shape from "../../../Tools/Home/shape-bg.png"
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-content">
      <div className="footer-title">
        <img
          src={shape}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
