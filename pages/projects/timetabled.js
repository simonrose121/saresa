import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Container, Grid, Span } from 'react-responsive-grid';
import Helmet from 'react-helmet';
import TagList from '../../components/TagList';

import { rhythm } from 'utils/typography';

import '../../css/zenburn.css';
import '../../css/projects.scss';

import Schema from './_snippets/_timetabled-response-schema.md';
import Dockerfile from './_snippets/_dockerfile.md';
import SrcUtilsIndex from './_snippets/_src-utils-index.md';

export default class ProjectsTimetabled extends React.Component {
  render () {
    return (
      <Container className="default-container" style={styles.defaultContainer} >
        <Helmet title="Timetabled - Projects" />

        <Grid columns={12}>
          <h2 style={styles.header}>Timetabled</h2>

          <TagList tags={['node.js', 'api']} />

          <p><strong>Timetabled</strong> is an API that provides bus/tram times for the Yorkshire region. It requires the <a href="https://data.gov.uk/dataset/naptan">NaPTAN</a> code of the stop and should return a JSON object with the details. The response you will receive will look like something below.</p>

          <div dangerouslySetInnerHTML={{__html: Schema.body}}></div>

          <blockquote>You can preview the API through <a href="https://market.mashape.com/rowellx68/timetabled">Mashape</a>.</blockquote>

          <p>Instead of <a href="https://github.com/expressjs/express/issues/2844">Express</a>, it uses <a href="https://github.com/koajs/koa">Koa</a> for the web server. At its core, it does not bundle any middleware so you get to install <strong>only</strong> the ones you need. I only needed <a href="https://github.com/alexmingoia/koa-router">koa-router</a> and <a href="https://github.com/koajs/json">koa-json</a>.</p>

          <p>The data is parsed from <a href="http://tsy.acislive.com/default.asp">South Yorkshire Passenger Transport Executive</a> which provies live/future departure data for a stop. It is using <a href="https://github.com/cheeriojs/cheerio">cheerio</a> to traverse the DOM and pick the data we require. By parsing data, this API will need to respond to changes to the DOM of the page.</p>

          <p>Using <a href="https://babeljs.io/">Babel</a>, I am able to use next generation JavaScript. In development, we just require <code>babel-core/register</code> to handle all the magic of transpilling. However, the <a href="https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#toc-babel-register">documentation</a> notes that this should not be done in production. To solve this issue, we use webpack to transpile the code! More magic.</p>

          <p>If you look at the <a href="https://github.com/rowellx68/timetabled">code</a>, you might notice references to <a href="https://market.mashape.com/">Mashape</a>. Instead of building my own implementation of monitoring and authentication, I opted to use Mashape's marketplace. I just need to deploy and instance of this API and point Mashape to and, et voilà, sorted!</p>

          <p>Deploying your own instance of the API will require some modifications. You will just need to remove the references to Mashape. You will need to first replace the Dockerfile with the one below.</p>

          <div dangerouslySetInnerHTML={{__html: Dockerfile.body}}></div>

          <p>Your next step is to remove the lines below from <code>src/utils/index.js</code>. After the changes, you should then be able to deploy your own instance.</p>

          <div dangerouslySetInnerHTML={{__html: SrcUtilsIndex.body}}></div>

          <p>The repository can be found <a href="https://github.com/rowellx68/timetabled">here</a>. Issues, questions, and PR's are welcome!</p>
        </Grid>
      </Container>
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
