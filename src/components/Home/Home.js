import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <h1 className={styles.motto}>Jalapeno is love. Jalapeno is life.</h1>
        <div className={styles.shortIntro}>
          <h2>If you don't like to read</h2>
          <p>
            We simply love delicious, spicy foods and we want to share our
            passion with you!
          </p>
        </div>
        <div className={styles.longIntro}>
          <div style={{ width: '50%' }}>
            <h2 style={{ textAlign: 'end' }}>If you'd like to know more</h2>
            <p>
              We started our career in the the autumn of '21. At first we were
              foreigners, but we clearly saw we have something in common. Our
              passion for one the most delicious and crunchiest peppers in the
              world, the jalapeno.This mostly green gift made all of us happy in
              hard times. We experimented the healthy benefits of consuming the
              pepper and we had an idea to involve it in our everyday routine.
              That's how the idea came: opening the country's first and only
              pepper-based restaurant. Feel free to explore our mad ideas and
              let us share our creations with you!
            </p>
          </div>
        </div>

        <h1 style={{ margin: '3% auto auto auto' }}>Have a JavaPeno time!</h1>
      </div>
    </div>
  );
};

export default Home;
