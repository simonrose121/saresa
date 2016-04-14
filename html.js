import React from 'react';
import DocumentTitle from 'react-document-title';

import { prefixLink } from 'gatsby-helpers';
import { TypographyStyle } from 'utils/typography';


module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string
    }
  },
  render () {
    const title = DocumentTitle.rewind();

    let cssLink;
    let jsLink;
    if (process.env.NODE_ENV === 'production') {
      const date = new Date();
      const cacheBuster = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;

      cssLink = <link rel="stylesheet" href={prefixLink(`/styles.css?t=${cacheBuster}`)} />;
      jsLink = <script src={prefixLink(`/bundle.js?t=${cacheBuster}`)} ></script>;
    } else {
      jsLink = <script src={prefixLink(`/bundle.js`)} ></script>;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon} />
          <TypographyStyle />
          {cssLink}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} ></div>
          {jsLink}
        </body>
      </html>
    );
  }
});