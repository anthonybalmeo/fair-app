/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import styles from '../../../styles/components/Pagination/index.sass';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Proptypes from 'prop-types';

export default class Pagination extends React.Component {
  render () {
    const { pages, currentPage } = this.props
    return (
      <div className={styles.paginationContainer}>
        <div className={`${styles.pagination} animated fadeIn`} data-test-id='pagination'>
          <div className={styles.paginationLinkContainer} data-test-id='page-links'>
            <Link to={`/listing/${parseInt(currentPage) - 1}`} className={classNames(styles.paginationLink, {[`${styles.paginationLinkInactive}`]: parseInt(currentPage) - 1 === 0})}>&laquo; </Link>
          </div>
          {
            pages.map((id, i) => (
              <div key={i} className={styles.paginationLinkContainer} data-test-id='page-links'>
                <Link to={`/listing/${id}`} className={classNames(styles.paginationLink, {[`${styles.paginationLinkActive}`]: currentPage === id})}>{id}</Link>
              </div>
            ))
          
          }
          <div className={styles.paginationLinkContainer} data-test-id='page-links'>
            <Link to={`/listing/${parseInt(currentPage) + 1}`} className={classNames(styles.paginationLink, {[`${styles.paginationLinkInactive}`]: parseInt(currentPage) + 1 > pages.length })}>  &raquo;</Link>
          </div>
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  pages: Proptypes.arrayOf(Proptypes.string),
  currentPage: Proptypes.string,
}
