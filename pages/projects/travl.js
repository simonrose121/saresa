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
        <Helmet title="Travl - Projects" meta={meta} />

        <h2 style={styles.header}>Travl</h2>
        <p className="meta-data">Rowell Heria | April 22, 2016</p>
        <TagList tags={['react', 'react native', 'ios']} />
        
        <p>This project will be built using <a href="https://facebook.github.io/react-native/">React Native</a>. It is a rehash of a previous project lost due to not pushing the repository online.</p>

        <p>It will take advantage of <a href="http://rowell.heria.uk/projects/timetabled/">Timetabled API</a> to provide real-time bus information.</p>
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
