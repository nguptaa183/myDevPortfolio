import {
  Intro,
  Skills,
  Contact,
  WorkExp,
  Certifications,
} from "../layouts";

import Projects from "../layouts/Projects";
import { Layout, SEO } from "../components";

function Landing() {
  return (
    <Layout>
      <SEO />
      <Intro />
      <Projects />
      <WorkExp />
      <Skills />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default Landing;
