import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

import { rhythm } from 'utils/typography';

const About = () =>
  <div className="default-container" style={styles.defaultContainer} >
    <Helmet title="About Me" />

    <h2>About Me</h2>
    <p>I'm Rowell Heria; an undergraduate at <a href="https://shu.ac.uk">Sheffield Hallam University</a>, studying Software Engineering. I love building things in JavaScript.</p>

  </div>;

const styles = {
  defaultContainer: {
    paddingTop: 0,
    marginTop: rhythm(1/2),
    overflow: 'hidden',
    minHeight: '100vh'
  }
};

export default About;
