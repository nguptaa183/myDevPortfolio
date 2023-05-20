import React from 'react';
import { Container } from '../../components';
import { Fade } from 'react-awesome-reveal';
import { Wrapper, WorkExpWrapper } from './styles';

export const WorkExp = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="WorkExp">
      <h1>Work Experience</h1>
      <WorkExpWrapper>
        <h3>Propelld</h3>
        <h6>
          Web Developer, Summer Intern
          <br />
          May-Jun 2019 | Bangalore, IN
        </h6>
        <p>
          Created a complete well documented service called cache service and integrated it with frontend for
          visualization. Also integrated consul services for health checkup and service discovery in few services used,
          and remotely contributed in few API’s documentation of different services used.
        </p>
      </WorkExpWrapper>
    </Wrapper>
  </Fade>
);
