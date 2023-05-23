import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 1rem;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const WorkExpWrapper = styled.div`
  padding: 2rem 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  h3 {
    margin-bottom: 0.5rem !important;
  }
  h6 {
    color: #586069;
    font-weight: 200;
    margin-bottom: 1rem !important;
  }
`;

export const CertificationItem = styled.div``;

export const Details = styled.div`
  flex: 1;
  margin: auto;
  padding-right: 2rem;

  .credential {
    color: #392eff !important;
  }

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  margin: auto;
  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;
