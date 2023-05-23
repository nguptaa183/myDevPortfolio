import { useGithubProjects } from "../../constants/userInfo";
import { GithubProjects } from "./githubProjects";
import { CustomProjects } from "./customProjects";

export const Projects = () => {
  return useGithubProjects ? GithubProjects() : CustomProjects();
};
