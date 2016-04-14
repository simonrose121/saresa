import React, {PropTypes} from 'react';
import { Container, Grid, Span } from 'react-responsive-grid';

import { rhythm } from 'utils/typography';

const Message = ({ text, type, containerStyle }) =>
  <Container className={`message ${type}`} style={{ ...styles.containerStyle, ...containerStyle }}>
    {text}
  </Container>;

const styles = {
  containerStyle: {
    maxWidth: '100%',
    padding: `${rhythm(1/3)} ${rhythm(1/3)}`,
    background: '#f1c40f',
    fontSize: 14
  }
};

export default Message;