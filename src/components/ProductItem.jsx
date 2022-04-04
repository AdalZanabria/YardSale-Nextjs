import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addedToCartImage} alt="added-to-cart" />
          ) : (
            <Image className={styles['add-to-cart-btn']} src={addToCartImage} alt="" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
