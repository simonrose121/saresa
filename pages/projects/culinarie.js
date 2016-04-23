import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import TagList from '../../components/TagList';

import { rhythm } from 'utils/typography';

import '../../css/zenburn.css';
import '../../css/projects.scss';

export default class ProjectsCulinarie extends React.Component {
  render () {
    return (
        <div className="default-container" style={styles.defaultContainer} >
          <Helmet title="Culinarie - Projects" meta={meta} />

          <h2 style={styles.header}>Culinarie</h2>
          <p className="meta-data">Rowell Heria | April 22, 2016</p>
          <TagList tags={['node.js', 'express', 'mongodb']} />

        </div>
    );
  }
}

const meta = [

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
