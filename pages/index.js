import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

import { rhythm } from 'utils/typography';
import HomeImage from '../components/HomeImage';
import HomeLanguage from '../components/HomeLanguage';

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
            {languages.map((lang, i) => <HomeLanguage key={i} lang={lang.lang} langClass={lang.langClass} />)}
          </div>
          <div className="language-blurb">
            In my spare time, I like to build stuff in JavaScript.
          </div>
          <div className="index-languages">
            {images.map((image, i) => <HomeImage key={i} img={image.src} alt={image.alt} />)}
          </div>
          <div className="language-blurb text-small">

          </div>
        </div>
      </div>
    );
  }
}

const images = [
  { src: 'images/docker.png', alt: 'docker' },
  { src: 'images/eslint.png', alt: 'eslint' },
  { src: 'images/mongodb.png', alt: 'mongodb' },
  { src: 'images/nodejs.png', alt: 'node.js' },
  { src: 'images/react.png', alt: 'react' },
  { src: 'images/sass.png', alt: 'sass' }
];

const languages = [
  { lang: '.NET', langClass: 'dot-net' },
  { lang: 'HTML', langClass: 'html' },
  { lang: 'CSS', langClass: 'css' },
  { lang: 'JS', langClass: 'js' }
];

const meta = [
  { "name": "description", "content": "Software Engineer. In my spare time, I like to build stuff in JavaScript. Some tech I've used: .NET, JS, Node.js, Express, React."}
];

const styles = {
  heroContainer: {
    background: '#ff6656',
    padding: '1.5em 0',
    marginBottom: '1rem',
    color: '#ffffff',
    fontSize: '3em',
    overflow: 'hidden'
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
