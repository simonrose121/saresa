import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

import { rhythm } from 'utils/typography';

export default class About extends React.Component {
  componentDidMount () {
    if (ga !== undefined) {
      ga('send', 'pageview', this.props.location.pathname);
    }
  }

  render () {
    return (
      <div className="default-container" style={styles.defaultContainer} >
        <Helmet title="About Me" meta={meta} />

        <h2>About Me</h2>
        <p>I'm Rowell Heria; an undergraduate at <a href="http://www.shu.ac.uk/">Sheffield Hallam University</a>, studying Software Engineering. I love building things in JavaScript.</p>

      </div>
    );
  }
}

const meta = [
  { "name": "description", "content": "More information about me and my experiences." }
];

const styles = {
  defaultContainer: {
    paddingTop: 0,
    marginTop: rhythm(1/2),
    overflow: 'hidden',
    minHeight: '100vh'
  }
};

export default About;
