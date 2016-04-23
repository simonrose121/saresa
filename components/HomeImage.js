import React, {PropTypes} from 'react';

const HomeImage = ({ img, alt }) =>
  <div className="col-2-12 mobile-col-4-12">
    <img src={img} alt={alt} />
  </div>;

export default HomeImage;