import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductItem.module.scss';
import addedToCart from '/public/icons/bt_added_to_cart.svg';
import aTc from '/public/icons/bt_add_to_cart.svg';

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
        <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)} aria-hidden="true">
          {state.cart.includes(product) ? (
            <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addedToCart} alt="added-to-cart" />
          ) : (
            <Image src={aTc} className={styles['add-to-cart-btn']} alt="add-to-cart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
