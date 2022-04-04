import React from 'react';
import Image from 'next/image';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="product image" />
      <div className={styles.ProductInfo}>
        <p>$35.00</p>
        <p>Bike</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nisi illum magni aliquam officia nesciunt soluta libero, delectus sapiente maxime assumenda ducimus laboriosam illo! At
          voluptatem enim repudiandae eos maxime?
        </p>
        <button className={(styles['primary-button'], styles['add-to-cart-button'])}>
          <img src="/icons/bt_add_to_cart.svg" alt="Add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
