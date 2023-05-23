import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "../Header";
import { Container, Button } from "../../components";
import intro from "../../assets/illustrations/intro.svg";
import { Fade } from "react-awesome-reveal";
import { IntroWrapper, Details, Thumbnail } from "./styles";
import { firstName, aboutMe, hireEmail, resumeLink, imageAlt } from "../../constants/userData/basicInfo";
import "./style.css";

export const Intro = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    getGreeting();
  }, [greeting]);

  const getGreeting = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon");
    } else if (hour >= 17 && hour < 24) {
      setGreeting("Good Evening");
    }
  };

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="bg-main">
        <Header />
        <div className="bg-content">
          <IntroWrapper as={Container}>
            <Details>
              <h2>
                Hi There{" "}
                <span className="wave-emoji">
                  <span className="wave">👋</span>
                </span>
              </h2>

              <h1>I'm {firstName}.</h1>
              <h3>{greeting}!</h3>
              <p>
                {aboutMe.firstPart}
                <span className="sde">{aboutMe.middlePart}</span>{" "}
                {aboutMe.lastPart}
              </p>
              <div className="button-greeting-div">
                <a href={hireEmail}>
                  <Button>Hire Me</Button>
                </a>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  <Button>Resume</Button>
                </a>
              </div>
            </Details>
            <Thumbnail>
              <img
                src={intro}
                alt={imageAlt}
              />
            </Thumbnail>
          </IntroWrapper>
          <AnchorLink href="#projects">
            <div className="scrollDown">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
          </AnchorLink>
        </div>
      </div>
    </Fade>
  );
};
