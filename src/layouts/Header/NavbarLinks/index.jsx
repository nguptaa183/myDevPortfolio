import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#education">Education</AnchorLink>
    <AnchorLink href="#workExp">Experiences</AnchorLink>
    <AnchorLink href="#skills">Skills</AnchorLink>
    <AnchorLink href="#certifications">Certifications</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
