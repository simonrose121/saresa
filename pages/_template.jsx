import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import Helmet from 'react-helmet';

import Message from '../components/Message';
import { rhythm } from 'utils/typography';
import '../css/grid.scss';

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
          <div className="container" style={styles.headroomLinkContainer} >
            <Link to={prefixLink('/')} style={styles.headroomLink} >
              Rowell Heria
            </Link>
            <div style={{ float: 'right' }} className="header-links">
              <Link to={prefixLink('/about/')} style={{...styles.headroomLink, ...styles.headroomLinkSmall}} >
                About Me
              </Link>
              <Link to={prefixLink('/projects/')} style={{...styles.headroomLink, ...styles.headroomLinkSmall}} >
                Projects
              </Link>
            </div>
          </div>
        </Headroom>
        <div style={{ maxWidth: '100%' }} >
          {this.props.children}
        </div>
        <footer>
          <div style={styles.footerContainer} >
            <div style={styles.footer} className="container">
              <div className="col-6-12 mobile-col-12-12">
                <Link to="/" style={styles.footerLinks}>Home</Link>
                <Link to="/about/" style={styles.footerLinks}>About Me</Link>
                <Link to="/projects/" style={styles.footerLinks}>Projects</Link>
              </div>

              <div className="col-6-12 mobile-col-12-12 text-right">
                <span className="copyright" style={{...styles.copyright}}>{copyright}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
});

const styles = {
  headroomLinkContainer: {
    paddingTop: rhythm(2/3),
    paddingBottom: rhythm(2/3)
  },
  headroomLink: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: '"Avenir Next", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
    fontSize: '25px',
    fontWeight: 'normal',
    display: 'inline-block'
  },
  headroomLinkSmall: {
    fontSize: '15px',
    marginLeft: rhythm(2/3)
  },
  footerContainer: {
    background: '#ecf0f1'
  },
  footer: {
    paddingTop: rhythm(2/3),
    paddingBottom: rhythm(2/3),
    fontSize: 13,
    fontFamily: 'sans-serif'
  },
  footerLinks: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#677c91',
    marginRight: rhythm(2/3)
  },
  copyright: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#677c91'
  }
};
