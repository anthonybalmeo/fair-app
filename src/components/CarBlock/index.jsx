import React from 'react';
import styles from '../../../styles/components/CarBlock/index.sass';
import Grid from 'react-css-grid';
import Slider from '../Slider'

const CarBlock = () => (
  <div className={styles.CarBlock}>
    <Grid>
      <div>
        <img src={'https://content.homenetiol.com/2001593/2112019/640x480/1e51cbbcff53413a9ae96743dcd655d9.jpg'} />
      </div>
      <div>
        <Grid
          width={100}
        >
          <div className='primary'>Car type</div>
        </Grid>
        <Grid
          width={100}
        >
          <div className='secondary'>VIN: 123213</div>
        </Grid>
        <Grid
          width={100}
        >
          <div className='secondary'>STK: 123213</div>
          <div className='secondary'>MILES: 123213</div>
        </Grid>
        <Grid
          width={100}
        >
          <div className='secondary'>STK: 123213</div>
          <div className='secondary'>MILES: 123213</div>
        </Grid>
      </div>
      <div>
        <Slider />
      </div>
    </Grid>
  </div>
);

export default CarBlock;
