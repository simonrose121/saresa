import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import TagList from '../../components/TagList';

import { rhythm } from 'utils/typography';

import '../../css/zenburn.css';
import '../../css/projects.scss';

import Text from './_text/_timetabled.md';

export default class ProjectsTimetabled extends React.Component {
  componentDidMount () {
    if (ga !== undefined) {
      ga('send', 'pageview', this.props.location.pathname);
    }
  }

  render () {
    return (
      <div className="default-container" style={styles.defaultContainer} >
        <Helmet title="Timetabled - Projects" meta={meta} />

        <h2 style={styles.header}>Timetabled</h2>
        <p className="meta-data">Rowell Heria | April 16, 2016</p>

        <TagList tags={['node.js', 'api', 'es6', 'babel', 'webpack']} />

        <span dangerouslySetInnerHTML={{__html: Text.body}}></span>
      </div>
    );
  }
}

const meta = [
  { "name": "description", "content": "Bus and tram times API. Built with Node.js and Koa." }
];

const styles = {
  header: {
    marginBottom: '0.5rem'
  },
  defaultContainer: {
    paddingTop: 0,
    marginTop: rhythm(1/2),
    overflow: 'hidden',
    minHeight: '100vh'
  }
};
