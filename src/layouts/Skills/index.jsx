import React from "react";
import { Container } from "../../components";
import skill from "../../assets/illustrations/skill.svg";
import { Fade } from "react-awesome-reveal";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";
import { skills } from "../../constants/userData/skills";
import { imageAlt } from "../../constants/userData/basicInfo";

export const Skills = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="skills">
      <h1>Skills</h1>
      <SkillsWrapper>
        <Thumbnail>
          <img src={skill} alt={imageAlt} />
        </Thumbnail>
        <Details>
          <ul>
            {Object.keys(skills).length !== 0 ? (
              skills.map((item) => (
                <li key={item.id}>
                  <span>
                    <img width="24" src={item.icon} alt={item.name} />
                  </span>
                  <p>{item.name}</p>
                </li>
              ))
            ) : (
              <div></div>
            )}
          </ul>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  </Fade>
);
