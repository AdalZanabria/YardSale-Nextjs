import React from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
  return (
    <aside className={styles['product-detail']}>
      <div className={styles['product-detail-close']}>
        <img src="/icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
