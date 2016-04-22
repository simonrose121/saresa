import React, {PropTypes} from 'react';

import { rhythm } from 'utils/typography';

const Message = ({ text, type, containerStyle }) =>
  <div className={`container message ${type}`} style={{ ...styles.containerStyle, ...containerStyle }}>
    {text}
  </div>;

const styles = {
  containerStyle: {
    maxWidth: '100%',
    paddingTop: rhythm(1/3),
    paddingBottom: rhythm(1/3),
    background: '#f1c40f',
    fontSize: 14
  }
};

export default Message;