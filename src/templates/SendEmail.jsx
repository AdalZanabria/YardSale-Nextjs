import React from 'react';
import Image from 'next/image';
import email from '/icons/email.svg';
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
  return (
    <div className={styles.SendEmail}>
      <div className={styles['form-container']}>
        <img src="/logos/logo_yard_sale.svg" alt="logo" width={150} className={styles.logo} />
        <h1 className={style.title}>Email has been sent!</h1>
        <p className={style.subtitle}>Please check your inbox for instructions on how to reset the password</p>
        <div className={style['email-image']}>
          <img src={email} alt="email" />
        </div>
        <button className={(styles['primary-button'], styles['login-button'])}>Login</button>
        <p className={styles.resend}>
          <span>Didn't receive the email? </span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
