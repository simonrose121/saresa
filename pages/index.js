import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

import { rhythm } from 'utils/typography';

import '../css/hero.scss';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet title="Home" meta={meta} />
        <section className="hero-container" style={styles.heroContainer}>
          <div className="hero container" style={styles.hero} >
            Software Engineer
          </div>
        </section>
        <div className="default-container" style={styles.defaultContainer} >
          <div className="language-blurb">
            Below are some of the technologies I have worked with in a professional capacity.
          </div>
          <div className="index-languages">
            <span className="col-3-12 mobile-col-6-12 language dot-net">
              .NET
            </span>
            <span className="col-3-12 mobile-col-6-12 language html">
              HTML
            </span>
            <span className="col-3-12 mobile-col-6-12 language css">
              CSS
            </span>
            <span className="col-3-12 mobile-col-6-12 language js">
              JS
            </span>
          </div>
          <div className="language-blurb">
            In my spare time, I like to build stuff in JavaScript.
          </div>
          <div className="index-languages">
            <div className="col-2-12 mobile-col-4-12">
              <img src="images/docker.png" alt="docker" />
            </div>
            <div className="col-2-12 mobile-col-4-12">
              <img src="images/eslint.png" alt="eslint" />
            </div>
            <div className="col-2-12 mobile-col-4-12">
              <img src="images/mongodb.png" alt="mongodb" />
            </div>
            <div className="col-2-12 mobile-col-4-12">
              <img src="images/nodejs.png" alt="node.js" />
            </div>
            <div className="col-2-12 mobile-col-4-12">
              <img src="images/react.png" alt="react" />
            </div>
            <div className="col-2-12 mobile-col-4-12">
              <img src="images/sass.png" alt="sass" />
            </div>
          </div>
          <div className="language-blurb text-small">
            
          </div>
        </div>
      </div>
    );
  }
}

const meta = [
  { "name": "description", "content": "Rowell Heria – Software Engineer. In my spare time, I like to build stuff in JavaScript. Some tech I've used: .NET, JS, Node.js, Express, React."}
];

const styles = {
  heroContainer: {
    background: '#ff6656',
    height: '250px',
    marginBottom: '1rem',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em'
  },
  heroContainerSmall: {
    height: '200px',
    fontSize: '2em'
  },
  heroSmall: {
    lineHeight: '1.1em'
  },
  hero: {
    maxWidth: 1024,
    padding: `${rhythm(1/2)} ${rhythm(2/3)}`,
    lineHeight: '1.5em',
    textAlign: 'center'
  },
  defaultContainer: {
    paddingTop: 0,
    overflow: 'hidden',
    minHeight: '100vh'
  }
};
