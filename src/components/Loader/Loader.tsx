'use client';

import Lottie from 'react-lottie';

import animation from './Loader.assets/lottie.json';

import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Lottie
        options={{
          animationData: animation,
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={88}
        width={88}
      />
    </div>
  );
};
