import {
  Intro,
  Skills,
  Contact,
  WorkExp,
  Projects,
  Certifications,
  Education,
} from "../layouts";

import { Layout, SEO } from "../components";

function Landing() {
  return (
    <Layout>
      <SEO />
      <Intro />
      <Projects />
      <Education />
      <WorkExp />
      <Skills />
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default Landing;
