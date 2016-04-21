import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Breakpoint, Container, Grid, Span } from 'react-responsive-grid';
import Helmet from 'react-helmet';

import { rhythm } from 'utils/typography';

import '../css/hero.scss';

export default class Index extends React.Component {
  render () {
    return (
      <Grid columns={12}>
        <Helmet title="Home" />
        <Span columns={12} last={true}>
          <section className="hero-container" style={styles.heroContainer}>
            <Container className="hero" style={styles.hero} >
              Software Engineer
            </Container>
          </section>
        </Span>
        <Container className="default-container" style={styles.defaultContainer} >
          <Grid columns={12} className="index-languages">
            <Breakpoint minWidth={425} widthMethod="componentWidth">
              <Span columns={3} className="language dot-net">
                .NET
              </Span>
              <Span columns={3} className="language html">
                HTML
              </Span>
              <Span columns={3} className="language css">
                CSS
              </Span>
              <Span columns={3} last={true} className="language js">
                JS
              </Span>
            </Breakpoint>
            <Breakpoint maxWidth={425} widthMethod="componentWidth">
              <Span columns={6} className="language dot-net">
                .NET
              </Span>
              <Span columns={6} last={true} className="language html">
                HTML
              </Span>
              <Span columns={6} className="language css">
                CSS
              </Span>
              <Span columns={6} last={true} className="language js">
                JS
              </Span>
            </Breakpoint>
          </Grid>
        </Container>
      </Grid>
    );
  }
}

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
    maxWidth: 1024,
    padding: `${rhythm(1/2)} ${rhythm(2/3)}`,
    paddingTop: 0,
    overflow: 'hidden',
    minHeight: '100vh'
  }
};
