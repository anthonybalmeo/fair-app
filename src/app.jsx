import React from 'react';
import Proptypes from 'prop-types';
import 'normalize.css';

import 'styles/base/_main.sass';  // Global styles
import 'styles/base/_common.sass';  // Global styles
import 'styles/base/_common.sass';  // Global styles
import styles from './app.sass'  // Css-module styles
import fairImage from './images/fair.png';

export default class App extends React.Component {
  componentDidMount () {
    const { history: { push } } = this.props;
    setTimeout(() => { push('/listing/1') }, 4000);
  }
  render() {
    return (
      <div className='App'>
        <div className={styles.wrap}>
          <div className={`${styles.top} ${styles.up}`}></div>
          <div className={`${styles.bottom} ${styles.down}`}></div>
        </div>
        <div className={styles.content}>
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
