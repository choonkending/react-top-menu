import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';

import Burger from 'Burger';
import styles from 'css/simple-menu.css';


export default class SimpleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onMenuToggle = this.onMenuToggle.bind(this);
  }

  onMenuToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {
      className,
      children,
      showBurger,
      ...elemProps
    } = this.props;

    const {isOpen} = this.state;

    objectAssign(elemProps, {
      className: classNames(styles.menu, className)
    });

    return (
      <div {...elemProps}>
        <Burger isOpen={isOpen} onMenuToggle={this.onMenuToggle}>
          {children}
        </Burger>
      </div>
    );
  }
}

