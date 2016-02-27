import React, {PropTypes} from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default TopMenu = props => {
  const {
    className,
    useDefaultClassName,
    children,
    ...elemProps
  } = props;

  objectAssign(elemProps, {
    className: classNames({
      'TopMenu': useDefaultClassName
    }, className)
  });

  return (<div {...elemProps}>{children}</div>);
};

