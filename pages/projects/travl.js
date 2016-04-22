import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import TagList from '../../components/TagList';

import { rhythm } from 'utils/typography';

import '../../css/zenburn.css';
import '../../css/projects.scss';

export default class ProjectsTravl extends React.Component {
  render () {
    return (
      <div className="default-container" style={styles.defaultContainer} >
        <Helmet title="Travl - Projects" />

        <h2 style={styles.header}>Travl</h2>

        <TagList tags={['react', 'react native', 'ios']} />
      </div>
    );
  }
}

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
