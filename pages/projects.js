import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

import ProjectCard from '../components/ProjectCard';
import { rhythm } from 'utils/typography';

const Projects = () =>
  <div className="default-container" style={styles.defaultContainer} >
    <Helmet title="Projects" />
    <h2>Projects</h2>

    <div className="projects-list">
      <div className="col-3-12 mobile-col-6-12 bottom-gutter" columns={3}>
        <ProjectCard link="/projects/timetabled/" image="images/timetabled-logo.png" title="Timetabled" statusType="done" status="DONE" />
      </div>
      <div className="col-3-12 mobile-col-6-12 bottom-gutter" columns={3}>
        <ProjectCard link="/projects/travl/" title="Travl" status="WIP" />
      </div>
    </div>
  </div>;

const styles = {
  defaultContainer: {
    paddingTop: 0,
    marginTop: rhythm(1/2),
    overflow: 'hidden',
    minHeight: '100vh'
  }
};

export default Projects;
