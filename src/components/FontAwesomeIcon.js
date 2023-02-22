import React from 'react';

const FontAwesomeIcon = ({icon}) => {
  const iconClassName = `${icon}`;

  return (
    <i className={iconClassName}></i>
  );
};

export default FontAwesomeIcon;