import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Container, Grid, Span } from 'react-responsive-grid';
import DocumentTitle from 'react-document-title';
import TagList from '../../components/TagList';

import templatedTitle from 'utils/titleHelper';
import { rhythm } from 'utils/typography';

import '../../css/zenburn.css';
import '../../css/projects.scss';

export default class ProjectsTravl extends React.Component {
  render () {
    return (
      <DocumentTitle title={templatedTitle('Travl - Projects')}>
        <Container className="default-container" style={styles.defaultContainer} >
          <Grid columns={12}>
            <h2 style={styles.header}>Travl</h2>

            <TagList tags={['react', 'react native', 'ios']} />
          </Grid>
        </Container>
      </DocumentTitle>
    );
  }
}

const styles = {
  header: {
    marginBottom: '0.5rem'
  },
  defaultContainer: {
    maxWidth: 1024,
    padding: `${rhythm(1/2)} ${rhythm(2/3)}`,
    paddingTop: 0,
    marginTop: rhythm(1/2),
    overflow: 'hidden',
    minHeight: '100vh'
  }
};
