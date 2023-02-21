import React from "react";
import Animation from "../../utilities/Animation";
import Scroll from "../../utilities/Scroll";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animation.fadeScreen(props.id);
  };
  const fadeInSubscription = Scroll.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );
  const SCREEN_CONSTANTS = {
    description:
      "Pariatur cillum non velit do magna sint consectetur. Cillum ea cupidatat velit quis ea eiusmod nulla exercitation nostrud consectetur nulla ad. Ad eiusmod quis voluptate ut nostrud laborum irure consequat qui dolor fugiat. Deserunt veniam ullamco officia ut cillum eu sint. Incididunt elit laboris magna minim esse excepteur eiusmod ea sunt.",
    highlights: {
      bullets: [
        "FullStack web development",
        "Interactive Frontend design",
        "Reactjs and Nodejs",
        "Redux for State Management",
        "Building REST APIs",
        "Managing databases",
      ],
      heading: "Here are a few highlights:",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire me </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1Z_QN_Oamc21TvnK-GQn9iaEYkl7AX4gp"
                download="Bilel Bouneb CV.pdf"
              >
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
