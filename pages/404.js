import React, {PropTypes} from 'react';
import { Container, Grid, Span } from 'react-responsive-grid';
import DocumentTitle from 'react-document-title';

import templatedTitle from 'utils/titleHelper';
import { rhythm } from 'utils/typography';

const NotFound = () =>
  <DocumentTitle title={templatedTitle('404')}>
    <Container className="default-container" style={styles.defaultContainer} >
      <Grid columns={12}>
        <Span columns={12} last={true}>
          <section className="not-found">
            <h2>No Found</h2>
            <p>Mind the construction materials, this site is still under heavy development.</p>
            <p></p>
          </section>
        </Span>
      </Grid>
    </Container>
  </DocumentTitle> ;

const styles = {
  defaultContainer: {
    maxWidth: 1024,
    padding: `${rhythm(1/2)} ${rhythm(2/3)}`,
    paddingTop: 0
  }
};

export default NotFound;