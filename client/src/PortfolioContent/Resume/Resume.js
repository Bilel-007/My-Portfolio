import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Scroll from "../../utilities/Scroll";
import Animation from "../../utilities/Animation";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    Scroll.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " => " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Redux", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 85 },
    { skill: "Mongo DB", ratingPercentage: 90 },
    { skill: "Git", ratingPercentage: 90 },
    { skill: "Github", ratingPercentage: 90 },
    { skill: "Devops", ratingPercentage: 85 },
    { skill: "AWS", ratingPercentage: 80 },
    { skill: "Linux", ratingPercentage: 80 },
    { skill: "Docker", ratingPercentage: 85 },
    { skill: "CI/CD", ratingPercentage: 90 },
    { skill: "Jenkins", ratingPercentage: 85 },
    { skill: "Kubernetes", ratingPercentage: 85 },
    { skill: "Ansible", ratingPercentage: 80 },
    { skill: "Vagrant", ratingPercentage: 80 },
    { skill: "Sonarqube", ratingPercentage: 85 },
    { skill: "Prometheus", ratingPercentage: 80 },
    { skill: "Grafana", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Technoriat & Factoriat",
      duration: { fromDate: "04/2022", toDate: "05/2022" },
      description:
        "A project with Admin Dashbord and Users Dashbord where the user can register and upload his info and then connect to see his status, while the Admin can change the status of users and can see their infos.",
      subHeading:
        "Technologies used: (MERN Stack): HTML, CSS, React JS, Redux, Bootstrap, Node JS, Express JS, Mongo DB, mongoose",
    },
    {
      title: "DevOps Project",
      duration: { fromDate: "10/2022", toDate: "10/2022" },
      description:
        "A project where we prepare a CI/CD pipeline for a MERN web app by containerizing it and create a kubernetes cluster with Kubeadm where we deploy it. Finally monitoring it metrics with Prometheus and Grafana",
      subHeading:
        "Technologies used: Docker, Jenkins, Kubernetes (kubeadm), Sonarqube, Prometheus, Grafana",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "01/2023", toDate: "03/2023" },
      description:
        "A personal portfolio website to show all my details, skills and projects",
      subHeading: "Technologies used: HTML, CSS, React JS, Rx JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"GOMYCODE"}
        subHeading={"Full-Stack JS Web Developer & DevOps Engineer"}
        fromDate={"11/2021"}
        toDate={"12/2022"}
      />
      <ResumeHeading
        heading={"NEW SKILLS ACADEMY."}
        subHeading={"Life Coaching."}
        fromDate={"02/2020"}
        toDate={"10/2020"}
      />
      <ResumeHeading
        heading={"SPI Training Center."}
        subHeading={"QHSE Manager."}
        fromDate={"01/2018"}
        toDate={"02/2018"}
      />
      <ResumeHeading
        heading={
          `NATO Maritime Interdiction Operational Training Centre.`
        }
        subHeading={"International Boarding Instructor."}
        fromDate={"10/2016"}
        toDate={"10/2016"}
      />
      <ResumeHeading
        heading={"Tunisian Military Academy."}
        subHeading={
          "Officer & DIPLOMA of National engineering in Weapon Sciences Engineering Branch."
        }
        fromDate={"08/2011"}
        toDate={"06/2014"}
      />
      <ResumeHeading
        heading={"Preparatory School for Military Academies."}
        subHeading={
          "Diploma of Prepatory School for Engineering Studies in Physics-Chemistry Branch."
        }
        fromDate={"08/2009"}
        toDate={"06/2011"}
      />
      <ResumeHeading
        heading={"Ibn Roched High School."}
        subHeading={"Baccalaureate in Mathematics Branch."}
        fromDate={"09/2005"}
        toDate={"06/2009"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Tunisian Ministry of National Defense."}
          subHeading={"Officer & Engineer"}
          fromDate={"09/2014"}
          toDate={"06/2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            I was a Naval Special Forces Officer and i had held so many
            functions and positions that help me to expand and level up my
            skills and knowleadge.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - IT Security Officer of the base.
          </span>
          <span className="resume-description-text">
            - Intervention missions as naval special forces team leader.
          </span>
          <span className="resume-description-text">
            - Company Logistics Manager.
          </span>
          <span className="resume-description-text">
            - Responsible of the trainings and operations room.
          </span>
          <span className="resume-description-text">
            - Management of human and material resources.
          </span>
          <span className="resume-description-text">
            - Planning of missions and tasks.
          </span>
          <span className="resume-description-text">
            - Profiling old and new recruits.
          </span>
          </div>
          <div className="experience-container">
          <ResumeHeading
            heading={"Freelance"}
            subHeading={"Web Developer & DevOps Engineer"}
            fromDate={"02/2023"}
            toDate={"Present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              I am trying to practice my skills in web development and devops
              engineering, develop my knowleadge and learn new Technologies.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Develop personal projects.
            </span>
            <span className="resume-description-text">
              - Learn new technolgies.
            </span>
            <span className="resume-description-text">
              - Develop my DevOps knowleadge.
            </span>
          </div>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Camping"
        description="I love going outdoors and get some fresh air in and watch great nature views"
      />
      <ResumeHeading
        heading="Gaming"
        description="I like spending my free time playing with console games specially Playstation"
      />
      <ResumeHeading
        heading="Reading"
        description="I spend some daily time reading books so to keep developing my mind and my personality"
      />
            <ResumeHeading
        heading="Writing"
        description="I use to write some poems in arabic language"
      />
            <ResumeHeading
        heading="Traveling"
        description="I have visited some countries and I want to discover another ones"
      />
            <ResumeHeading
        heading="Sports"
        description="I am an active person who love running, swimming and biking"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Tools/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
