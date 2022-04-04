import React from 'react';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
  return (
    <div className={styles.CreateAccount}>
      <div className={styles['CreateAccount-container']}>
        <h1 className={styles['title']}>My Account</h1>
        <form action="/" className={styles['form']}>
          <div>
            <label for="name" className={styles['label']}>
              Name
            </label>
            <input type="text" id="name" placeholder="Su nombre" className={(styles.input, styles['input-name'])} />
            <label for="email" className="label">
              Email
            </label>
            <input type="text" id="email" placeholder="correo@ejemplo.com" className={(styles.input, styles['input-email'])} />
            <label for="password" className={styles.label}>
              Password
            </label>
            <input type="password" id="password" placeholder="*********" className={(styles.input, styles['input-password'])} />
          </div>
          <input type="submit" value="Create" className={(styles['primary-button'], styles['login-button'])} />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
