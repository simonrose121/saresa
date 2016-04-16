import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Breakpoint, Container, Grid, Span } from 'react-responsive-grid';
import DocumentTitle from 'react-document-title';

import templatedTitle from 'utils/titleHelper';
import { rhythm } from 'utils/typography';

import '../css/hero.scss';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={templatedTitle('Home')}>
        <Grid columns={12}>
          <Span columns={12}>
            <section className="hero-container" style={styles.heroContainer}>
              <Container className="hero" style={styles.hero} >
                Software Engineer
              </Container>
            </section>
          </Span>
          <Container className="default-container" style={styles.defaultContainer} >
            <Grid columns={12}>
              <Span columns={12} last={true}>
                <section className="index-text">
                  <h2>Welcome intrepid travellers!</h2>
                </section>
              </Span>
            </Grid>
          </Container>
        </Grid>
      </DocumentTitle>
    );
  }
}

const styles = {
  heroContainer: {
    background: '#ff6656',
    height: '250px',
    marginBottom: rhythm(1/2),
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
