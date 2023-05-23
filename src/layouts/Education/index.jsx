import React from "react";
import { Container } from "../../components";
import { Fade } from "react-awesome-reveal";
import { Wrapper, EduWrapper, Logo, Details } from "./styles";
import { education } from "../../constants/userData/education";

export const Education = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="education">
      <h1>Education</h1>
      {Object.keys(education).length !== 0 ? (
        education.map((item) => (
          <EduWrapper key={item.id}>
            <Logo>
              <img src={item.collegeLogo} alt={`${item.collegeName} logo`} />
            </Logo>
            <Details>
              <h3>{item.collegeName}</h3>
              <h6>
                <b>{item.degree}</b>
              </h6>
              <h6>
                {item.dateFrom} - {item.dateTo} | {item.city}, {item.country}
              </h6>
            </Details>
          </EduWrapper>
        ))
      ) : (
        <div></div>
      )}
    </Wrapper>
  </Fade>
);
