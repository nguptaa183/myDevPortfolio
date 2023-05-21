import React from "react";
import { Container } from "../../components";
import { Fade } from "react-awesome-reveal";
import { Wrapper, EduWrapper, Logo, Details } from "./styles";
import UB from "../../assets/logos/UB.png";
import NITR from "../../assets/logos/NITR.png";

export const Education = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="Education">
      <h1>Education</h1>
      <EduWrapper>
        <Logo>
          <img src={UB} alt="SUNY at Buffalo logo" />
        </Logo>
        <Details>
          <h3>State University of New York at Buffalo</h3>
          <h6>
            <b>Masters of Science in Computer Science and Engineering</b>
          </h6>
          <h6>Aug 2023 - Dec 2024 | Buffalo, USA</h6>
        </Details>
      </EduWrapper>
      <EduWrapper>
        <Logo>
          <img src={NITR} alt="NIT Rourkela logo" />
        </Logo>
        <Details>
          <h3>National Institute of Technology Rourkela</h3>
          <h6>
            <b>Bachelor of Technology in Computer Science and Engineering</b>
          </h6>
          <h6>Sep 2016 - May 2020 | Rourkela, India</h6>
        </Details>
      </EduWrapper>
    </Wrapper>
  </Fade>
);
