import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <div className='bg-orange-400'>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <section className={styles.heroSection}>
        <div className={styles.cardGrid}>
          <a className={styles.card} href="#">
            <div
              className={styles.cardBackground}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
              }}
            ></div>
            <div className={styles.cardContent}>
              <p className={ styles.cardHeading}>Feature heading</p>
              <h3 className={styles.cardCategory}>brief description</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div
              className={styles.cardBackground}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
              }}
            ></div>
            <div className={styles.cardContent}>
            <p className={ styles.cardHeading}>Feature heading</p>
            <h3 className={styles.cardCategory}>brief description</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div
              className={styles.cardBackground}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
              }}
            ></div>
            <div className={styles.cardContent}>
            <p className={ styles.cardHeading}>Feature heading</p>
            <h3 className={styles.cardCategory}>brief description</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div
              className={styles.cardBackground}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
              }}
            ></div>
            <div className={styles.cardContent}>
            <p className={ styles.cardHeading}>Feature heading</p>
            <h3 className={styles.cardCategory}>brief description</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Features;
