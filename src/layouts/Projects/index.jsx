import { useGithubProjects } from "../../constants/userData/projects";
import { GithubProjects } from "./githubProjects";
import { CustomProjects } from "./customProjects";

export const Projects = () => {
  return useGithubProjects ? GithubProjects() : CustomProjects();
};
