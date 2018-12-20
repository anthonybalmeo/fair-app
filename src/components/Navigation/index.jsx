/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom';
import fairImage from '../../images/fair.png';
import styles from '../../../styles/components/Navigation/index.sass';

const Navigation = () => (
  <div className={styles.navigation}>
    <div className='row middle-xs' data-test-id='navigation'>
      <div className='col-xs-2'>
        <Link to='/' className='ui__links'>
          <img src={fairImage} className={styles.navigationLogo} />
        </Link>
      </div>
      <div className='col-xs-10 ui__text-align--right'>
        <div className={styles.navigationLinks}>
          <Link to='/' className='ui__links'>Home</Link>
          <Link to='/listing' className='ui__links'>Explore Cars</Link>
          <Link to='/detail/19XFC2F59GE2276732016' className='ui__links'>Detail</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
