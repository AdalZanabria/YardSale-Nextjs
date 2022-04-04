import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const EditAccount = () => {
  return (
    <div className={styles.MyAccount}>
      <div className={styles['MyAccount-container']}>
        <h1 className={styles.title}>My Account</h1>
        <form action="/" className={styles.form}>
          <div>
            <label for="name" className={styles.label}>
              Name
            </label>
            <p className={styles.value}>Nombre</p>

            <label for="email" className={styles.label}>
              Email
            </label>
            <p className={styles.value}>correo@ejemplo.com</p>

            <label for="password" className={styles.label}>
              Password
            </label>
            <p className={styles.value}>*********</p>
          </div>
          <input type="submit" value="Edit" className={(styles['secondary-button'], styles['login-button'])} />
        </form>
      </div>
    </div>
  );
};

export default EditAccount;
