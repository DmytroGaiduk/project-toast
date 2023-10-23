import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDelete }) {


  return (
    <ol className={styles.wrapper}>
      {toasts && toasts.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.key}>
            <Toast variant={item.variant} handleDelete={handleDelete} id={item.key}>{item.message}</Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
