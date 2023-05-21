import React from "react";
import { Container } from "../../components";
import { Fade } from "react-awesome-reveal";
import { Wrapper, WorkExpWrapper, Details, Thumbnail } from "./styles";
import certification from "../../assets/illustrations/certification.svg";

export const Certifications = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="certifications">
      <h1>Certifications</h1>
      <WorkExpWrapper>
        <Details>
          <h3>AWS Certified Solutions Architect – Associate</h3>
          <h6>
            AWS
            <br />
            Issued: Aug 2022
            <br />
            Credential ID: <a
            href="https://www.credly.com/badges/66e5b509-f48d-48bf-8a6e-be90aa618dc0/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
          ><span className="credential">3PFG8TB2S211QDW8</span></a>
          </h6>

          <h3>Microsoft Certified: Azure Fundamentals</h3>
          <h6>
            Microsoft
            <br />
            Issued: May 2021
            <br />
            Credential ID: <a
            href="https://www.credly.com/badges/b6201b53-e960-4300-a564-f50827463fcd?source=linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
          ><span className="credential">H826-0508</span></a>
          </h6>
          


          <h3>
            Site Reliability Engineering: Measuring and Managing Reliability
          </h3>
          <h6>
            Coursera
            <br />
            Issued: Aug 2021
            <br />
            Credential ID: <a
            href="https://www.coursera.org/account/accomplishments/verify/HTR5FWFBCDWG"
            target="_blank"
            rel="noopener noreferrer"
          ><span className="credential">HTR5FWFBCDWG</span></a>
          </h6>

          <h3>The Bits and Bytes of Computer Networking</h3>
          <h6>
            Coursera
            <br />
            Issued: Jan 2023
            <br />
            Credential ID: <a
            href="https://www.coursera.org/account/accomplishments/certificate/GWNA32Y3MSXV"
            target="_blank"
            rel="noopener noreferrer"
          ><span className="credential">GWNA32Y3MSXV</span></a>
          </h6>

          <h3>Python for Everybody Specialization</h3>
          <h6>
            Coursera
            <br />
            Issued: May 2020
            <br />
            Credential ID: <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/H2WJPG6QFC93"
            target="_blank"
            rel="noopener noreferrer"
          ><span className="credential">H2WJPG6QFC93</span></a>
          </h6>

          <h3>Problem Solving</h3>
          <h6>
            HackerRank
            <br />
            Issued: Sep 2020
            <br />
            Credential ID: <a
            href="https://www.hackerrank.com/certificates/5e040381ff91"
            target="_blank"
            rel="noopener noreferrer"
          ><span className="credential">5e040381ff91</span></a>
          </h6>
         
         
         
          <h3>Scrum Team Member</h3>
          <h6>
            Scrum Inc
            <br />
            Issued: July 2021
            <br />
            Credential ID: <a
            href="https://s3.amazonaws.com/scruminc-certs/7bc3d86c-361a-46af-a7e5-df11f5e0755a"
            target="_blank"
            rel="noopener noreferrer"
          ><span className="credential">7bc3d86c-361a-46af-a7e5-df11f5e0755a</span></a>
          </h6>
        

          <h3>Verified International Academic Qualifications</h3>
          <h6>
            World Education Services
            <br />
            Issued: Aug 2021
            <br />
            Credential ID: <a
            href="https://www.credly.com/badges/efd9fc34-9532-4344-a3f3-0d69fb8e9dd7?source=linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
          ><span className="credential">efd9fc34-9532-4344-a3f3-0d69fb8e9dd7</span></a>
          </h6>
         
        </Details>
        <Thumbnail>
          <img
            src={certification}
            alt="I’m Nikhil and I’m a Full Stack Developer"
          />
        </Thumbnail>
      </WorkExpWrapper>
    </Wrapper>
  </Fade>
);
