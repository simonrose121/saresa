import React, {PropTypes} from 'react';
import { Container, Grid, Span } from 'react-responsive-grid';
import Helmet from 'react-helmet';

import { rhythm } from 'utils/typography';

const NotFound = () =>
  <Container className="default-container" style={styles.defaultContainer} >
    <Helmet title="404" />

    <Grid columns={12}>
      <Span columns={12} last={true}>
        <section className="not-found">
          <h2>Not Found</h2>
          <p>Mind the construction materials, this site is still under heavy development.</p>
          <p></p>
        </section>
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

export default NotFound;