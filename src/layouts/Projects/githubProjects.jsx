import React, { useEffect, useState } from "react";
import { gql, GraphQLClient } from "graphql-request";
import { Container, Card, Button } from "../../components";
import starIcon from "../../assets/icons/star.svg";
import forkIcon from "../../assets/icons/fork.svg";
import repoIcon from "../../assets/icons/repo.svg";
import { Fade } from "react-awesome-reveal";
import { Wrapper, Grid, Item, Content, Stats } from "./styles";
import { githubUsername } from "../../constants/userData/projects";

export const GithubProjects = () => {
  const [githubUserData, setgithubUserData] = useState({});

  useEffect(() => {
    getGithubUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const endpoint = `https://api.github.com/graphql`;

  const getGithubUserData = async () => {
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    // console.log(githubUsername);
    const query = gql`
      {
        user(login: "${githubUsername}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const jsonData = await graphQLClient.request(query);
      setgithubUserData(jsonData);
    } catch (err) {
      setgithubUserData({});
    }
  };
  return (
    <Fade bottom duration={1000} distance="20px">
      <Wrapper as={Container} id="projects">
        <h1>Projects</h1>
        <Grid>
          {Object.keys(githubUserData).length !== 0 ? (
            githubUserData.user.pinnedItems.edges.map((item) => (
              <Item
                key={item.node.id}
                as="a"
                href={item.node.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card>
                  <Content>
                    <div className="repo-name">
                      <img src={repoIcon} alt="repo" />
                      <h3>{item.node.name}</h3>
                    </div>
                    <p>{item.node.description}</p>
                  </Content>
                  <Stats>
                    <div className="repo-left">
                      <div className="repo-lang">
                        <span
                          className="language-color"
                          style={{
                            backgroundColor: item.node.primaryLanguage.color,
                          }}
                        ></span>
                        <span>{item.node.primaryLanguage.name}</span>
                      </div>
                      <div>
                        <img src={starIcon} alt="stars" />
                        <span>{item.node.stargazers.totalCount}</span>
                      </div>
                      <div>
                        <img src={forkIcon} alt="forks" />
                        <span>{item.node.forkCount}</span>
                      </div>
                    </div>
                    <div className="repo-right">
                      <span>{item.node.diskUsage} KB</span>
                    </div>
                  </Stats>
                </Card>
              </Item>
            ))
          ) : (
            <div></div>
          )}
        </Grid>
        <div className="seeMoreProjects">
          <a
            href="https://github.com/nguptaa183?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>See More</Button>
          </a>
        </div>
      </Wrapper>
    </Fade>
  );
};
