import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "../Header";
import { Container, Button } from "../../components";
import intro from "../../assets/illustrations/intro.svg";
import Resume from "../../assets/Resume/Nikhil_Gupta_Resume.pdf";
import { Fade } from "react-awesome-reveal";
import { IntroWrapper, Details, Thumbnail } from "./styles";
import "./style.css";

export const Intro = () => {
  let greeting = "";
  const date = new Date();
  const hour = date.getHours();
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 24) {
    greeting = "Good Evening";
  }

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
                <br />
                <h1>I'm Nikhil.</h1>
              </h2>
              <h3>{greeting}!</h3>
              <p>
                I am a Full Stack developer with industry experience building
                websites and web applications. My field of interest includes but
                not limited to Web Development, Scalability, Machine
                Learning/AI, Data Science.
              </p>
              <div className="button-greeting-div">
                <a href="mailto:hire@aayannikhil.com">
                  <Button>Hire Me</Button>
                </a>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  <Button>Resume</Button>
                </a>
              </div>
            </Details>
            <Thumbnail>
              <img
                src={intro}
                alt="I’m Nikhil and I’m a Full Stack developer!"
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
