import React from 'react';
import Image from 'next/image';
import styles from '@styles/Order.module.scss';
import flechita from 'public/icons/flechita.svg';

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
