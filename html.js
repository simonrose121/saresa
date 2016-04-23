import React from 'react';
import Helmet from 'react-helmet';

import { prefixLink } from 'gatsby-helpers';
import { TypographyStyle } from 'utils/typography';


module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string
    }
  },
  render () {
    let head = Helmet.rewind();

    let cssLink;
    let jsLink;
    let analytics;
    if (process.env.NODE_ENV === 'production') {
      const date = new Date();
      const cacheBuster = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;

      cssLink = <link rel="stylesheet" href={prefixLink(`/styles.css?t=${cacheBuster}`)} />;
      jsLink = <script src={prefixLink(`/bundle.js?t=${cacheBuster}`)} ></script>;
      analytics = <script src={prefixLink(`/analytics.js`)} ></script>;
    } else {
      jsLink = <script src={prefixLink(`/bundle.js`)} ></script>;
    }

    return (
      <html lang="en-GB">
        <head>
          {head.meta.toComponent()}
          {head.title.toComponent()}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0" />
          <meta name="google-site-verification" content="eM4qnmohZXa1mYYxBOVFMJCn_Xq_x1QkrECo2YqAisU" />
          <link rel="shortcut icon" href={this.props.favicon} />
          <TypographyStyle />
          {cssLink}
          {analytics}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} ></div>
          {jsLink}
        </body>
      </html>
    );
  }
});
