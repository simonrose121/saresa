import React from 'react';
import { Breakpoint, Container, Grid, Span } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import Helmet from 'react-helmet';

import Message from '../components/Message';
import { rhythm } from 'utils/typography';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any
    }
  },
  render () {
    let copyright = `© ${new Date().getFullYear()} Rowell Heria`;
    return (
      <div>
        <Helmet titleTemplate="%s | Rowell Heria" />

        <Message type="info" text="This site is under development. Something will probably break."
          containerStyle={{ textAlign: 'center', background: '#ffe32e' }}/>
        <Headroom style={{ background: '#e74c3c' }} disable={true}>
          <Container style={styles.headroomLinkContainer} >
            <Link to={prefixLink('/')} style={styles.headroomLink} >
              Rowell Heria
            </Link>
            <div style={{ float: 'right' }}>
              <Link to={prefixLink('/about/')} style={{...styles.headroomLink, ...styles.headroomLinkSmall}} >
                About Me
              </Link>
              <Link to={prefixLink('/projects/')} style={{...styles.headroomLink, ...styles.headroomLinkSmall}} >
                Projects
              </Link>
            </div>
          </Container>
        </Headroom>
        <Container style={{ maxWidth: '100%' }} >
          {this.props.children}
        </Container>
        <footer>
          <Container style={styles.footerContainer} >
            <Container style={styles.footer}>
              <Grid columns={12}>
                <Breakpoint minWidth={426} widthMethod="componentWidth">
                  <Span columns={12}>
                    <Link to="/" style={styles.footerLinks}>Home</Link>
                    <Link to="/about/" style={styles.footerLinks}>About Me</Link>
                    <Link to="/projects/" style={styles.footerLinks}>Projects</Link>

                    <span className="copyright" style={{...styles.footerLinks, float: 'right'}}>{copyright}</span>
                  </Span>
                </Breakpoint>
                <Breakpoint maxWidth={425} widthMethod="componentWidth">
                  <Span columns={12}>
                    <Link to="/" style={styles.footerLinks}>Home</Link>
                    <Link to="/about/" style={styles.footerLinks}>About Me</Link>
                    <Link to="/projects/" style={styles.footerLinks}>Projects</Link>
                  </Span>
                  <Span columns={12}>
                    <span className="copyright" style={{...styles.footerLinks}}>{copyright}</span>
                  </Span>
                </Breakpoint>
              </Grid>
            </Container>
          </Container>
        </footer>
      </div>
    )
  }
});

const styles = {
  headroomLinkContainer: {
    maxWidth: 1024,
    paddingTop: 0,
    padding: `${rhythm(2/3)} ${rhythm(2/3)}`
  },
  headroomLink: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: '"Avenir Next", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
    fontSize: '25px',
    fontWeight: 'normal'
  },
  headroomLinkSmall: {
    fontSize: '15px',
    marginLeft: rhythm(2/3)
  },
  footerContainer: {
    maxWidth: '100%',
    background: '#ecf0f1'
  },
  footer: {
    maxWidth: 1024,
    paddingTop: 0,
    padding: `${rhythm(2/3)} ${rhythm(2/3)}`,
    fontSize: 13,
    fontFamily: 'sans-serif'
  },
  footerLinks: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#677c91',
    marginRight: rhythm(2/3)
  }
};
