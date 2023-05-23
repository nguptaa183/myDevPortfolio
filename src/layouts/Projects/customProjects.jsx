import React from "react";
import { Container, Card } from "../../components";
import repoIcon from "../../assets/icons/repo.svg";
import { Fade } from "react-awesome-reveal";
import { Wrapper, Grid, Item, Content } from "./styles";
import { projects } from "../../constants/userData/projects";

export const CustomProjects = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <Wrapper as={Container} id="projects">
        <h1>Projects</h1>
        <Grid>
          {Object.keys(projects).length !== 0 ? (
            projects.map((item) => (
              <Item key={item.id}>
                <Card>
                  <Content>
                    <div className="repo-name">
                      <img src={repoIcon} alt="repo" />
                      <h3>{item.name}</h3>
                    </div>
                    <p>{item.description}</p>
                  </Content>
                </Card>
              </Item>
            ))
          ) : (
            <div></div>
          )}
        </Grid>
      </Wrapper>
    </Fade>
  );
};
