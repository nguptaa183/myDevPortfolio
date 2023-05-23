import React from "react";
import { Container } from "../../components";
import { Fade } from "react-awesome-reveal";
import {
  Wrapper,
  WorkExpWrapper,
  CertificationItem,
  Details,
  Thumbnail,
} from "./styles";
import certification from "../../assets/illustrations/certification.svg";
import { certifications } from "../../constants/userData/certification";
import { imageAlt } from "../../constants/userData/basicInfo";

export const Certifications = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="certifications">
      <h1>Certifications</h1>
      <WorkExpWrapper>
        <Details>
          {Object.keys(certifications).length !== 0 ? (
            certifications.map((item) => (
              <CertificationItem key={item.id}>
                <h3>{item.certificationName}</h3>
                <h6>
                  {item.issuedBy}
                  <br />
                  Issued: {item.issuedDate}
                  <br />
                  Credential ID:{" "}
                  <a
                    href={item.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="credential">{item.credentialID}</span>
                  </a>
                </h6>
              </CertificationItem>
            ))
          ) : (
            <div></div>
          )}
        </Details>
        <Thumbnail>
          <img src={certification} alt={imageAlt} />
        </Thumbnail>
      </WorkExpWrapper>
    </Wrapper>
  </Fade>
);
