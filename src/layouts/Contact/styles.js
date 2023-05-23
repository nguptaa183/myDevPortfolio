import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const ContactWrapper = styled.div`
  padding: 1rem 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  margin: auto;
  padding-left: 2rem;
  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
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
  display: block;
  margin: auto;
`;
