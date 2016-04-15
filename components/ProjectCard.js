import React, {PropTypes} from 'react';
import { Link } from 'react-router';

export class ProjectCard extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string
  };

  componentWillMount () {
    this.setState({
      hover: false
    });
  }

  hoverToggle () {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    let {link, title, image, containerStyle} = this.props;
    let hoverStyles = this.state.hover ? styles.projectCardHover : {};

    return (
      <Link to={link} style={{ ...styles.projectCard, ...containerStyle, ...hoverStyles }} onMouseEnter={() => this.hoverToggle()}
        onMouseLeave={() => this.hoverToggle()} onFocus={() => this.hoverToggle()} onBlur={() => this.hoverToggle()} >
        <div className="image"
             style={{ background: `url(${image || 'images/placeholder.png'}) center center`, ...styles.projectImage }}></div>
        <div className="title" style={styles.projectTitle}>
          {title}
        </div>
      </Link>
    );
  }
}

const styles = {
  projectCard: {
    display: 'block',
    borderRadius: 2,
    background: '#ffffff',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)',
    textDecoration: 'none',
    transition: 'all 0.5s ease'
  },
  projectCardHover: {
    boxShadow: '0 2px 10px 0 rgba(0,0,0,.24),0 2px 20px 0 rgba(0,0,0,.2)'
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