/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import Proptypes from 'prop-types';
import styles from '../../../styles/components/FavoriteHeart/index.sass';


export default class FavoriteHeart extends React.Component {
  constructor (props) {
    super(props);
    const {
      defaultFavorite,
    } = props;

    this.state = { isFavorited: defaultFavorite };
    this.selectFavoriteCar = this.selectFavoriteCar.bind(this);
  }

  selectFavoriteCar = (e) => {
    const isChecked = e.target.checked
      isChecked
        ? this.props.saveFavoriteVehicles(e.target.id)
        : this.props.removeFavoriteVehicles(e.target.id);

    this.setState({
      isFavorited: e.target.checked
    });
  }

  render () {
    const {
      id,
      className,
    } = this.props
    return (
      <div className={`${styles.FavoriteCheckboxContainer} ${className}`} data-test-id='favorite-heart'>
        <input
          type='checkbox' id={`${id}`}
          className={styles.FavoriteHeartCheckbox}
          onChange={this.selectFavoriteCar}
          defaultChecked={this.state.isFavorited}
          data-test-id={`${id}-favorite-checkbox-input`}
        />
        <label
          htmlFor={`${id}`}
          data-test-id={`${id}-favorite-checkbox-label`}
          className={styles.FavoriteHeartLabel}
        />
    </div>
    );
  }
}

FavoriteHeart.propTypes = {
  className: Proptypes.string,
  saveFavoriteVehicles: Proptypes.func,
  removeFavoriteVehicles: Proptypes.func,
  id: Proptypes.string,
  defaultFavorite: Proptypes.bool,
}
