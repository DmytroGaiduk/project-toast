import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {

  const { toasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts && toasts.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.key}>
            <Toast variant={item.variant} id={item.key}>{item.message}</Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
