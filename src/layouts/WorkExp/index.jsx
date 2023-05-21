import React from "react";
import { Container } from "../../components";
import { Fade } from "react-awesome-reveal";
import { Wrapper, WorkExpWrapper, Logo, Details, WorkDetails } from "./styles";
import Propelld from "../../assets/logos/Propelld.png";
import JD from "../../assets/logos/JD.png";

export const WorkExp = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="WorkExp">
      <h1>Work Experience</h1>
      <WorkExpWrapper>
        <Logo>
          <img src={JD} alt="John Deere logo" />
        </Logo>
        <Details>
          <h3>John Deere</h3>
          <h6>
            <b>Senior Software Engineer</b>
          </h6>
          <h6>Aug 2020 - Jun 2023 | Pune, IN</h6>
        </Details>
      </WorkExpWrapper>
      <WorkDetails>
        <ul type="square">
          <li>
            Assisted various organizations’ teams in migrating their
            applications and data from private(on-prem) to public clouds(AWS &
            Azure), reducing operational costs by 20% and supporting cloud
            operations post-migration.
          </li>
          <li>
            Developed cloud complexity calculator Web application that
            calculates migration complexity and categorizes them into low,
            medium, and high which helps us to get tentative efforts needed to
            complete the migration.
          </li>
          <li>
            Worked on Instance scheduler POC, a solution that reduces
            operational costs by configuring start and stop schedules for Amazon
            EC2 and Amazon RDS instances. Also, implemented it across a few
            application teams for cost savings.
          </li>
          <li>
            Created data visualization dashboards using Power BI and Grafana to
            track cloud activities like funding, approved/ongoing projects, and
            certifications that saved stakeholders significant time.
          </li>
          <li>
            Collaborated with teams across multiple regions for Site Reliability
            Engineering(SRE) implementation on multiple domains and also
            conducted a few SRE workshops within the team.
          </li>
        </ul>
      </WorkDetails>
      <WorkExpWrapper>
        <Logo>
          <img src={Propelld} alt="Propelld logo" />
        </Logo>
        <Details>
          <h3>Propelld</h3>
          <h6>
            <b>Web Developer Intern</b>
          </h6>
          <h6>May 2019 - Jun 2019 | Bangalore, IN</h6>
        </Details>
      </WorkExpWrapper>
      <WorkDetails>
        <ul type="square">
          <li>
            Worked on microservice architecture and built cache service API for
            frequently accessed data that decreased the fetch/compute time for
            data retrieval achieving a cache hit ratio of over 90%.
          </li>
          <li>
            Integrated Consul services for a health checkup and service
            discovery in a few services.
          </li>
          <li>
            Contributed to API’s documentation of different microservices used
            using Swagger API tools.
          </li>
        </ul>
      </WorkDetails>
    </Wrapper>
  </Fade>
);
