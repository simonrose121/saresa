import React, {PropTypes} from 'react';
import { Link } from 'react-router';

import './styles.scss';

const ProjectCard = ({ link, title, image, status, statusType, containerStyle }) =>
  <Link to={link} className="project-card" style={{ ...styles.projectCard, ...containerStyle }} >
    { status && <span className={`status ${statusType}`}>{status}</span> }
    <div className="image"
         style={{ background: `url(${image || 'images/placeholder.svg'}) center center`, ...styles.projectImage }}></div>
    <div className="title" style={styles.projectTitle}>
      {title}
    </div>
  </Link>;

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  containerStyle: PropTypes.object
};

const styles = {
  projectCard: {
    display: 'block',
    borderRadius: 2,
    background: '#ffffff',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    position: 'relative'
  },
  projectImage: {
    backgroundSize: 'cover',
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    height: 200
  },
  projectTitle: {
    padding: 5,
    fontFamily: 'sans-serif',
    color: '#677c91',
    textDecoration: 'none'
  }
};

export default ProjectCard;