import React from "react";
import { Container } from "../../components";
import { Fade } from "react-awesome-reveal";
import {
  Wrapper,
  WorkExpWrapper,
  WorkExpItem,
  Logo,
  Details,
  WorkDetails,
} from "./styles";
import { experiences } from "../../constants/userData/experience";

export const WorkExp = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="workExp">
      <h1>Work Experiences</h1>
      {Object.keys(experiences).length !== 0 ? (
        experiences.map((item) => (
          <WorkExpItem key={item.id}>
            <WorkExpWrapper>
              <Logo>
                <img src={item.companyLogo} alt={`${item.companyName} logo`} />
              </Logo>
              <Details>
                <h3>{item.companyName}</h3>
                <h6>
                  <b>{item.designation}</b>
                </h6>
                <h6>
                  {item.dateFrom} - {item.dateTo} | {item.city}, {item.country}
                </h6>
              </Details>
            </WorkExpWrapper>
            <WorkDetails>
              <ul type="square">
                {item.description.map((desItem) => (
                  <li key={desItem}>{desItem}</li>
                ))}
              </ul>
            </WorkDetails>
          </WorkExpItem>
        ))
      ) : (
        <div></div>
      )}
    </Wrapper>
  </Fade>
);
