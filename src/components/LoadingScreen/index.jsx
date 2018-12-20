/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import styles from '../../../styles/components/LoadingScreen/index.sass';

export const LoadingScreen = message => () => 
  <div className={`${styles.loadingScreen} animated fadeIn`} data-test-id='loading-screen'>
    <div className='loadingScreenContainer'>
      <span className={styles.loadingAnimation}></span>
      <p className={styles.loadingMessage}>
      {
        message ? message : 'Loading cars ...'
      }
      </p>
    </div>
  </div>
