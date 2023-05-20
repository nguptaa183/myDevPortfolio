import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
  div.seeMoreProjects {
    text-align: center;
    margin-top: 1rem;
  }
  @media (max-width: 960px) {
    h1 {
      text-align: center;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  padding: 1rem 0 0 0;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  div.repo-name {
    display: flex;
    align-items: center;

    h3 {
      color: #212121;
      margin-left: 0.3rem;
    }
  }

  p {
    color: #586069;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  color: #586069;
  justify-content: space-between;
  font-size: 15px;

  div.repo-lang {
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.75rem;
  }

  span.language-color {
    width: 10px;
    height: 10px;
    background-color: blue;
    margin-right: 0.15rem;
    border-radius: 100%;
  }

  div {
    display: flex;
    margin-right: 0.5rem;

    img {
      margin: 0;
    }

    span {
      margin-left: 0.1rem;
    }
  }
`;
