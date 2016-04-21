import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Container, Grid, Span } from 'react-responsive-grid';
import Helmet from 'react-helmet';

import { rhythm } from 'utils/typography';

const About = () =>
  <Container className="default-container" style={styles.defaultContainer} >
    <Helmet title="About Me" />

    <Grid columns={12}>
      <Span columns={12} last={true}>
        <h2>About Me</h2>
        <p>I'm Rowell Heria; an undergraduate at <a href="https://shu.ac.uk">Sheffield Hallam University</a>, studying Software Engineering. I love building things in JavaScript.</p>

      </Span>
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

export default About;
