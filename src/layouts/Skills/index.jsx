import React from "react";
import { Container } from "../../components";
import skill from "../../assets/illustrations/skill.svg";
import {
  FaPython,
  FaCuttlefish,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNode,
} from "react-icons/fa";
import {
  DiMysql,
  DiMongodb,
  DiDart,
  DiPhp,
  DiGit,
  DiLinux,
} from "react-icons/di";
import { RiFlutterLine } from "react-icons/ri";
import { GrGatsbyjs } from "react-icons/gr";
import { Fade } from "react-awesome-reveal";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="skills">
      <h1>Skills</h1>
      <SkillsWrapper>
        <Thumbnail>
          <img src={skill} alt="I’m Nikhil and I’m a Full Stack Developer" />
        </Thumbnail>
        <Details>
          <div className="software-skills-main-div">
            <ul className="dev-icons">
              <li className="software-skill-inline" name="python">
                <i>
                  <FaPython />
                </i>
                <p>Python</p>
              </li>
              <li className="software-skill-inline" name="cplusplus">
                <i>
                  <FaCuttlefish />
                </i>
                <p>C/C++</p>
              </li>
              <li className="software-skill-inline" name="html-5">
                <i>
                  <FaHtml5 />
                </i>
                <p>HTML-5</p>
              </li>
              <li className="software-skill-inline" name="css3">
                <i>
                  <FaCss3Alt />
                </i>
                <p>CSS3</p>
              </li>
              <li className="software-skill-inline" name="JavaScript">
                <i>
                  <FaJs />
                </i>
                <p>JavaScript</p>
              </li>
              <li className="software-skill-inline" name="dart">
                <i>
                  <DiDart />
                </i>
                <p>Dart</p>
              </li>
              <li className="software-skill-inline" name="flutter">
                <i>
                  <RiFlutterLine />
                </i>
                <p>Flutter</p>
              </li>
              <li className="software-skill-inline" name="php">
                <i>
                  <DiPhp />
                </i>
                <p>PHP</p>
              </li>
              <li className="software-skill-inline" name="nodejs">
                <i>
                  <FaNode />
                </i>
                <p>nodeJS</p>
              </li>
              <li className="software-skill-inline" name="reactjs">
                <i>
                  <FaReact />
                </i>
                <p>ReactJS</p>
              </li>
              <li className="software-skill-inline" name="gatsbyjs">
                <i>
                  <GrGatsbyjs />
                </i>
                <p>GatsbyJS</p>
              </li>
              <li className="software-skill-inline" name="bootstrap">
                <i>
                  <FaBootstrap />
                </i>
                <p>Bootstrap</p>
              </li>
              <li className="software-skill-inline" name="mysql">
                <i>
                  <DiMysql />
                </i>
                <p>MySQL</p>
              </li>
              <li className="software-skill-inline" name="mongodb">
                <i>
                  <DiMongodb />
                </i>
                <p>MongoDB</p>
              </li>
              <li className="software-skill-inline" name="git">
                <i>
                  <DiGit />
                </i>
                <p>Git</p>
              </li>
              <li className="software-skill-inline" name="linux">
                <i>
                  <DiLinux />
                </i>
                <p>Linux</p>
              </li>
            </ul>
          </div>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  </Fade>
);
