import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Container, Grid, Span } from 'react-responsive-grid';
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
        <Span columns={3}>
          <ProjectCard link="/projects/timetabled/" title="timetabled" status="DONE" />
        </Span>
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
    minHeight: 650
  }
};

export default Projects;
