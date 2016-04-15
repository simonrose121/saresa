import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Container, Grid, Span } from 'react-responsive-grid';
import DocumentTitle from 'react-document-title';

import templatedTitle from 'utils/titleHelper';
import { rhythm } from 'utils/typography';

import '../../css/zenburn.css';
import '../../css/projects.scss';

import Schema from './_snippets/_timetabled-response-schema.md';

export default class ProjectsTimetabled extends React.Component {
  render () {
    console.log(Schema);
    return (
      <DocumentTitle title={templatedTitle('timetabled - Projects')}>
        <Container className="default-container" style={styles.defaultContainer} >
          <Grid columns={12}>
            <h2>timetabled</h2>

            <p><strong>timetabled</strong> is an API that provides bus/tram times for South Yorkshire. It requires the <a href="https://data.gov.uk/dataset/naptan">NaPTAN</a> code of the stop and should return a JSON object with the details. The response you will receive will look like something below.</p>

            <div dangerouslySetInnerHTML={{__html: Schema.body}}></div>

            
          </Grid>
        </Container>
      </DocumentTitle>
    );
  }
}

const styles = {
  defaultContainer: {
    maxWidth: 1024,
    padding: `${rhythm(1/2)} ${rhythm(2/3)}`,
    paddingTop: 0,
    marginTop: rhythm(1/2),
    overflow: 'hidden',
    minHeight: 650
  }
};
