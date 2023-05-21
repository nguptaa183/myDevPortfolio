import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const EduWrapper = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

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
