import React, {PropTypes} from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';

import 'css/top-menu.css';

const ReactTopMenu = props => {
  const {
    className,
    useDefaultClassName,
    children,
    isSticky,
    ...elemProps
  } = props;

  objectAssign(elemProps, {
    className: classNames({
      'react-top-menu': useDefaultClassName,
      'react-top-menu--sticky': isSticky
    }, className)
  });

  return (<div {...elemProps}>{children}</div>);
};

module.exports = ReactTopMenu;

