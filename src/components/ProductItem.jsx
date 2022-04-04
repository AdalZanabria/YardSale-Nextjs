import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles.ProductItem}>
      <img src={product.images[0]} width={240} height={240} alt={product.title} />
      <div className={styles['product-info']}>
        <div>
          <p>${product?.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <img className={(styles.disabled, styles['add-to-cart-btn'])} src="/icons/bt_added_to_cart.svg" alt="added-to-cart" />
          ) : (
            <img className={styles['add-to-cart-btn']} src="/icons/bt_add_to_cart.svg" alt="" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
