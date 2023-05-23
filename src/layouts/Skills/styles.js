import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 2rem 0 0 0;
  }
`;

export const Details = styled.div`
  flex: 1;
  margin: auto;
  padding-left: 2rem;

  ul {
    list-style: none;
    align-items: center;
    font-size: 2rem;
  }

  li {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    color: #868e96;
    font-size: 10px;
  }

  @media (max-width: 960px) {
    text-align: center;
    padding-left: unset;
    width: 100%;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  margin: auto;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
