import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Container, Grid, Span } from 'react-responsive-grid';
import DocumentTitle from 'react-document-title';

import templatedTitle from 'utils/titleHelper';
import { rhythm } from 'utils/typography';

const About = () =>
    <DocumentTitle title={templatedTitle('About')}>
      <Container className="default-container" style={styles.defaultContainer} >
        <Grid columns={12}>
          <Span columns={12} last={true}>
            <h2>About Me</h2>
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
    minHeight: 600
  }
};

export default About;
