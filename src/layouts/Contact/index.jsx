import React from "react";
import { Container } from "../../components";
import contact from "../../assets/illustrations/contact.svg";
import { Fade } from "react-awesome-reveal";
import { Wrapper, ContactWrapper, Details, Thumbnail } from "./styles";
import { ContactForm } from "./ContactForm";

export const Contact = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="contact">
      <h1>Contact</h1>
      <ContactWrapper>
        <Thumbnail>
          <img src={contact} alt="I’m Nikhil and I'm a Full Stack Developer" />
        </Thumbnail>
        <Details>
          <ContactForm />
        </Details>
      </ContactWrapper>
    </Wrapper>
  </Fade>
);
