import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import styles from 'css/burger.css';

const {
	burger,
	burgerStripe,
	one,
	two,
	three,
	flipOne,
	flipTwo,
	flipThree } = styles;

export default class Burger extends Component {
  constructor(props) {
    super(props);
    this.onBurgerFlip = this.onBurgerFlip.bind(this);
  }

  onBurgerFlip() {
    this.props.onMenuToggle();
  }

  render() {
		const {isOpen} = this.props;
    return (
      <div className={burger} onClick={this.onBurgerFlip}>
        <span className={classNames(burgerStripe, one, {flipOne: isOpen})}></span>
        <span className={classNames(burgerStripe, two, {flipTwo: isOpen})}></span>
        <span className={classNames(burgerStripe, three, {flipThree: isOpen})}></span>
      </div>
    );
  }
}

