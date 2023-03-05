import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-content">
      <div className="profile-title">
        <div className="profile-details">
          <div className="profile-column">
            <div className="profile-column-icon">
              <a href="https://www.facebook.com/bilel.bouneb.9">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Bilel.bouneb90@gmail.com&su=&body=">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/bilel-bouneb/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/Bilel-007">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="Highlighted-text">Bilel</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  steps={[
                    "Web developer ✌️",
                    1000,
                    "FullStack developer 💻",
                    1000,
                    "MERN Stack developer 🏅",
                    1000,
                    "Javascript developer 😎",
                    1000,
                    "DevOps engineer 🌟",
                    1000,
                    "AWS practitioner 😉",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <span className="profile-role-line">
                Ambitious to build web application with frontend and backend
                technologies.
              </span>
            </span>
          </div>
          <div className="profile-opts">
            <button className="btn primary-btn"> Hire me </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1Z_QN_Oamc21TvnK-GQn9iaEYkl7AX4gp"
              download="Bilel Bouneb CV.pdf"
            >
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
