import React, {PropTypes} from 'react';

const HomeLanguage = ({ lang, langClass }) =>
  <span className={`col-3-12 mobile-col-6-12 language ${langClass}`}>
    {lang}
  </span>;

export default HomeLanguage;