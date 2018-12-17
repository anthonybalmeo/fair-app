import React from 'react';
import Proptypes from 'prop-types';
import 'normalize.css';

import 'styles/base/_main.sass';  // Global styles
import 'styles/base/_common.sass';  // Global styles
import 'styles/base/_common.sass';  // Global styles
import styles from './app.sass'  // Css-module styles
import fairImage from './images/fair.png';
import classNames from 'classnames';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadAnimation: false,
    };
  }
  componentDidMount () {
    const { history: { push } } = this.props;
    // FUN ANIMATION AND REDIRECT
    setTimeout(() => {
      this.setState({loadAnimation: true})
    }, 500)
    setTimeout(() => {
      this.setState({loadAnimation: false})
      push('/listing/1');
    }, 2500);
  }
  render() {
    return (
      <div className='App'>
        <div className={styles.wrap}>
          <div className={classNames(`${styles.top}`, {[`${styles.up}`]: this.state.loadAnimation})}></div>
          <div className={classNames(`${styles.bottom}`, {[`${styles.down}`]: this.state.loadAnimation})}></div>
        </div>
        <div className={`${styles.content} animated fadeIn`}>
          <img src={fairImage} className={`${styles.logo} animated tada delay-1s`} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: Proptypes.shape({
    push: Proptypes.func,
}),
}
