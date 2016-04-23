import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

import ProjectCard from '../components/ProjectCard';
import { rhythm } from 'utils/typography';

export default class Projects extends React.Component {
  componentDidMount () {
    if (ga !== undefined) {
      ga('send', 'pageview', this.props.location.pathname);
    }
  }

  render () {
    return (
      <div className="default-container" style={styles.defaultContainer} >
        <Helmet title="Projects" meta={meta} />
        <h2>Projects</h2>

        <div className="projects-list">
          <div className="col-3-12 mobile-col-6-12 bottom-gutter" >
            <ProjectCard link="/projects/timetabled/" image="images/timetabled-logo.png" title="Timetabled" statusType="done" status="DONE" />
          </div>
          <div className="col-3-12 mobile-col-6-12 bottom-gutter" >
            <ProjectCard link="/projects/travl/" title="Travl" image="images/travl-logo.png" status="WIP" />
          </div>
          <div className="col-3-12 mobile-col-6-12 bottom-gutter" >
            <ProjectCard link="/projects/culinarie/" title="Culinarie" image="images/culinarie-logo.png" statusType="done" status="DONE"  />
          </div>
        </div>
      </div>
    );
  }
}

const meta = [
  { "name": "description", "content": "Past and ongoing personal projects." }
];

const styles = {
  defaultContainer: {
    paddingTop: 0,
    marginTop: rhythm(1/2),
    overflow: 'hidden',
    minHeight: '100vh'
  }
};

export default Projects;
