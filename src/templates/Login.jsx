import React, { useRef } from 'react';
import Image from 'next/image';
import styles from '@styles/Login.module.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className={styles.login}>
      <div className={styles['login-container']}>
        <img src="/logos/logo_yard_sale.svg" width={150} alt="logo" className={styles.logo} />

        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={style.labe} l>
            Email address
          </label>
          <input type="text" name="email" placeholder="correo@ejemplo.com" className={styles['input input-email']} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={styles['input input-password']} />
          <button className={(styles['primary-button'], styles['login-button'])} onClick={handleSubmit}>
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>

        <button className={(styles['secondary-button'], styles['signup-button'])}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
