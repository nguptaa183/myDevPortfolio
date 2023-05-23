import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
  @media (max-width: 960px) {
    text-align: center;
    p {
      padding-left: 0 !important;
    }
  }
  p {
    padding-left: 4rem;
    text-align: left;
  }
`;

export const WorkExpWrapper = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  h3 {
    margin-bottom: 0.5rem !important;
  }
  h6 {
    color: #586069;
    font-weight: 200;
  }
`;

export const WorkExpItem = styled.div``;

export const Logo = styled.div`
  img {
    height: 3.25rem;
    width: 4rem;

    margin: auto !important;
  }
`;

export const Details = styled.div`
  padding-left: 0.5rem;

  h3 {
    margin-bottom: 0.5rem !important;
  }
  h6 {
    color: #586069;
    font-weight: 200;
    margin: 0px 0px !important;
  }
`;

export const WorkDetails = styled.div`
  padding-left: 4rem;
  text-align: left;
  li {
    margin-bottom: 0 !important;
  }
  @media (max-width: 960px) {
    padding-left: 0 !important;
    margin-top: 0.5rem !important;
  }
`;
