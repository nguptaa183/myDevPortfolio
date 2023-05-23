import React from "react";
import { Container } from "../../components";
import { Fade } from "react-awesome-reveal";
import { Wrapper, Flex, Links, Details } from "./styles";
import { legalName } from "../../constants/userData/basicInfo";
import { social } from "../../constants/userData/social";

export const Footer = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <h2>{legalName}</h2>
          <span>© All rights are reserved | {new Date().getFullYear()}</span>
        </Details>
        <Links>
          {Object.keys(social).length !== 0 ? (
            social.map(({ id, name, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`follow me on ${name}`}
              >
                <img width="24" src={icon} alt={name} />
              </a>
            ))
          ) : (
            <div></div>
          )}
        </Links>
      </Flex>
    </Wrapper>
  </Fade>
);
