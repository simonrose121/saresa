import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Breakpoint, Container, Grid, Span } from 'react-responsive-grid';
import DocumentTitle from 'react-document-title';

import ProjectCard from '../components/ProjectCard';
import templatedTitle from 'utils/titleHelper';
import { rhythm } from 'utils/typography';

const Projects = () =>
  <DocumentTitle title={templatedTitle('Projects')}>
    <Container className="default-container" style={styles.defaultContainer} >
      <Grid columns={12}>
        <Span columns={12} last={true}>
          <h2>Projects</h2>
        </Span>
        <Breakpoint minWidth={768} widthMethod="componentWidth">
          <Span columns={3}>
            <ProjectCard link="/projects/timetabled/" title="timetabled" statusType="done" status="DONE" />
          </Span>
        </Breakpoint>
        <Breakpoint minWidth={426} maxWidth={768} widthMethod="componentWidth">
          <Span columns={4}>
            <ProjectCard link="/projects/timetabled/" title="timetabled" statusType="done" status="DONE" />
          </Span>
        </Breakpoint>
        <Breakpoint minWidth={321} maxWidth={425} widthMethod="componentWidth">
          <Span columns={6}>
            <ProjectCard link="/projects/timetabled/" title="timetabled" statusType="done" status="DONE" />
          </Span>
        </Breakpoint>
        <Breakpoint maxWidth={320} widthMethod="componentWidth">
          <Span columns={12}>
            <ProjectCard link="/projects/timetabled/" title="timetabled" statusType="done" status="DONE" />
          </Span>
        </Breakpoint>
      </Grid>
    </Container>
  </DocumentTitle>;

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
