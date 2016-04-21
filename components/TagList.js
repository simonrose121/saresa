import React, {PropTypes} from 'react';
import Tag from './Tag';

const TagList = ({ tags }) =>
  <div className="tag-list" style={styles}>
    {tags.map((tag, i) => <Tag key={i} tag={tag} />)}
  </div>;

TagList.propTypes = {
  tags: PropTypes.array
};

const styles = {
  marginBottom: '1.5rem',
  fontStyle: 'italic'
};

export default TagList