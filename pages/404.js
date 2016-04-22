import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';

import { rhythm } from 'utils/typography';

const NotFound = () =>
  <div className="default-container" style={styles.defaultContainer} >
    <Helmet title="404" />

    <section className="not-found">
      <h2>Not Found</h2>
      <p>Mind the construction materials, this site is still under heavy development.</p>
      <p></p>
    </section>
  </div>;

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