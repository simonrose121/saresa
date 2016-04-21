import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Breakpoint, Container, Grid, Span } from 'react-responsive-grid';
import Helmet from 'react-helmet';

import ProjectCard from '../components/ProjectCard';
import { rhythm } from 'utils/typography';

const Projects = () =>
  <Container className="default-container" style={styles.defaultContainer} >
    <Helmet title="Projects" />

    <Grid columns={12}>
      <Span columns={12} last={true}>
        <h2>Projects</h2>
      </Span>
      <Breakpoint minWidth={768} widthMethod="componentWidth">
        <Span columns={3}>
          <ProjectCard link="/projects/timetabled/" image="images/timetabled-logo.png" title="Timetabled" statusType="done" status="DONE" />
        </Span>
        <Span columns={3}>
          <ProjectCard link="/projects/travl/" title="Travl" status="WIP" />
        </Span>
      </Breakpoint>
      <Breakpoint minWidth={426} maxWidth={768} widthMethod="componentWidth">
        <Span columns={4}>
          <ProjectCard link="/projects/timetabled/" title="timetabled" statusType="done" status="DONE" />
        </Span>
        <Span columns={4}>
          <ProjectCard link="/projects/travl/" title="Travl" status="WIP" />
        </Span>
      </Breakpoint>
      <Breakpoint minWidth={321} maxWidth={425} widthMethod="componentWidth">
        <Span columns={6}>
          <ProjectCard link="/projects/timetabled/" title="timetabled" statusType="done" status="DONE" />
        </Span>
        <Span columns={6}>
          <ProjectCard link="/projects/travl/" title="Travl" status="WIP" />
        </Span>
      </Breakpoint>
      <Breakpoint maxWidth={320} widthMethod="componentWidth">
        <Span columns={12}>
          <ProjectCard link="/projects/timetabled/" title="timetabled" statusType="done" status="DONE" />
        </Span>
        <Span columns={12}>
          <ProjectCard link="/projects/travl/" title="Travl" status="WIP" />
        </Span>
      </Breakpoint>
    </Grid>
  </Container>;

const styles = {
  defaultContainer: {
    maxWidth: 1024,
    padding: `${rhythm(1/2)} ${rhythm(2/3)}`,
    paddingTop: 0,
    marginTop: rhythm(1/2),
    overflow: 'hidden',
    minHeight: '100vh'
  }
};

export default Projects;
