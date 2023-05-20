import React from "react";
import { Container } from "../../components";
import { Fade } from "react-awesome-reveal";
import { Wrapper, WorkExpWrapper, Details, Thumbnail } from "./styles";
import certification from "../../assets/illustrations/certification.svg";

export const Certifications = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="certifications">
      <h1>Certifications</h1>
      <WorkExpWrapper>
        <Details>
          <h3>The Complete 2020 Flutter Development Bootcamp with Dart</h3>
          <h6>
            Udemy
            <br />
            Issued: Jun 2020
            <br />
            Credential ID: UC-bc63e90b-226d-42c5-9e81-2f996d53430b
          </h6>
          <a
            href="https://ude.my/UC-bc63e90b-226d-42c5-9e81-2f996d53430b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>See credential</p>
          </a>
          <h3>Python for Everybody Specialization</h3>
          <h6>
            Coursera
            <br />
            Issued: May 2020
            <br />
            Credential ID: H2WJPG6QFC93
          </h6>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/H2WJPG6QFC93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>See credential</p>
          </a>
          <h3> Modern React with Redux</h3>
          <h6>
            Udemy
            <br />
            Issued: Sep 2019
            <br />
            Credential ID: UC-NWVLNXMA
          </h6>
          <a
            href="https://ude.my/UC-NWVLNXMA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>See credential</p>
          </a>
          <h3> The Complete Node.js Developer Course</h3>
          <h6>
            Udemy
            <br />
            Issued: May 2019
            <br />
            Credential ID: UC-2R80WVP3
          </h6>
          <a
            href="https://ude.my/UC-2R80WVP3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>See credential</p>
          </a>
        </Details>
        <Thumbnail>
          <img
            src={certification}
            alt="I’m Nikhil and I’m a Full Stack Developer"
          />
        </Thumbnail>
      </WorkExpWrapper>
    </Wrapper>
  </Fade>
);
