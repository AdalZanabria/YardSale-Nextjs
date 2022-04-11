import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/MenuDesktop';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import menu from '../../public/icons/icon_menu.svg';
import logo from '../../public/logos/logo_yard_sale.svg';
import shoppingCart from '../../public/icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <img src={menu.src} className={styles.menu} alt="menu" />
        <div className={styles['navbar-left']}>
          <Link href="/" passHref>
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>

          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={(styles['navbar-email'], styles['more-clickable-area'], styles.pointer)} onClick={toggleMenu} aria-hidden="true">
              correo@ejemplo.com
            </li>
            <li className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()} aria-hidden="true">
              <Image className={(styles['more-clickable-area'], styles.pointer)} src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
        {state.orderIsOpen && <MyOrder />}
      </nav>
    </>
  );
};

export default Header;
