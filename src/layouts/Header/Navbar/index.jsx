import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../components";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";
import { legalName } from "../../../constants/userData/basicInfo";

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <span className="grey-color"> &lt;</span>
      <span className="logo-name">{legalName}</span>
      <span className="grey-color">/&gt;</span>
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
