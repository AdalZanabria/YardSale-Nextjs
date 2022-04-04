import React from 'react';
import Image from 'next/image';
import flechita from '@icons/flechita.svg';
import styles from '@styles/Order.module.scss';

const Order = () => {
  return (
    <div className={styles.Order}>
      <p>
        <span>04.25.21</span>
        <span>6 artículos</span>
      </p>
      <p>$560.00</p>
      <Image src={flechita} alt="View Order" />
    </div>
  );
};

export default Order;
