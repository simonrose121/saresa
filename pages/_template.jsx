import React from 'react';
import { Container, Grid, Span } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';

import Message from '../components/Message';
import { rhythm } from 'utils/typography';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any
    }
  },
  render () {
    return (
      <div>
        <Message type="info" text="This site is under development. Something will probably break."
          containerStyle={{ textAlign: 'center', background: '#ffe32e' }}/>
        <Headroom style={{ background: '#e74c3c' }} disable={true}>
          <Container style={styles.headroomLinkContainer} >
            <Link to={prefixLink('/')} style={styles.headeroomLink} >
              Saresa
            </Link>
          </Container>
        </Headroom>
        <Container style={{ maxWidth: '100%' }} >
          {this.props.children}
        </Container>
        <footer>
          <Container style={styles.footerContainer} >
            <Container style={styles.footer}>
              <Grid columns={12}>
              <Span columns={3} style={styles.footerTrebble}>
                <div className="footer-header" style={styles.footerHeader}>Saresa</div>
                <Link to="/" style={styles.footerLinks}>Home</Link>
                <Link to="/about/" style={styles.footerLinks}>About Me</Link>
                <Link to="/projects/" style={styles.footerLinks}>Projects</Link>
              </Span>
              <Span columns={3} style={styles.footerTrebble}>
                <div className="footer-header" style={styles.footerHeader}></div>
              </Span>
              <Span columns={3} last={true} style={styles.footerTrebble}>
                <div className="footer-header" style={styles.footerHeader}></div>
              </Span>
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
  headeroomLink: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: '"Avenir Next", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
    fontSize: '25px'
  },
  footerContainer: {
    maxWidth: '100%',
    background: '#ecf0f1'
  },
  footer: {
    maxWidth: 1024,
    paddingTop: 0,
    padding: `${rhythm(2/3)} ${rhythm(2/3)}`
  },
  footerTrebble: {
    fontSize: 13,
    lineHeight: '13px',
    color: '#677c91',
    fontFamily: 'sans-serif'
  },
  footerHeader: {
    fontSize: 15,
    lineHeight: '15px',
    fontWeight: 'bold',
    marginBottom: 10
  },
  footerLinks: {
    display: 'block',
    padding: '0 0 8px 0',
    textDecoration: 'none',
    color: '#677c91'
  }
};
