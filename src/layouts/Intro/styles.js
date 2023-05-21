import styled from "styled-components";

export const IntroWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    display: block;
  }
`;

export const Details = styled.div`
  flex: 1;

  div.button-greeting-div {
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    margin: 0 !important;
  }

  h3 {
    margin-bottom: 0.5rem !important;

    font-size: 2rem;
    color: #586069;
  }

  p {
    font-size: 1.25rem;
    color: #586069;
  }

  /* Media Query */
  @media (max-width: 1380px) {
    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 20px;
    }
  }
  @media (max-width: 960px) {
    div.button-greeting-div {
      align-items: center;
      justify-content: center;
    }

    h1 {
      font-size: 30px;
      text-align: center;
    }
    h2 {
      text-align: center;
    }
    h3 {
      font-size: 1.2rem;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: normal;
      text-align: center;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
  }
`;
