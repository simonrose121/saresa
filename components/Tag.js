import React, {PropTypes} from 'react';

const Tag = ({ tag }) =>
  <span className="tag" style={styles}>
    {tag}
  </span>;

Tag.propTypes = {
  tag: PropTypes.string.isRequired
};

const styles = {
  borderRadius: '30px',
  backgroundColor: '#3498db',
  color: '#ffffff',
  padding: '0.15rem 0.5rem',
  fontSize: '13px',
  marginRight: '0.25rem'
};

export default Tag;