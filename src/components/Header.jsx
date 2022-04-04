import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/MenuDesktop';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={styles.Nav}>
      <img src="/icons/icon_menu.svg" layout="fill" className={styles.menu} alt="menu" />
      <div className={styles['navbar-left']}>
        <figure className={styles['nav-logo']}>
          <Link href="/">
            <img src="/logos/logo_yard_sale.svg" alt="logo" />
          </Link>
        </figure>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            correo@ejemplo.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)}>
            <img src="/icons/icon_shopping_cart.svg" alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
