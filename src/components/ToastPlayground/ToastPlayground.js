import React from 'react';
import Button from '../Button';
import Toast from '../Toast'
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [variant, setVariant] = React.useState('notice')
  const [message, setMessage] = React.useState('test')
  const [toasts, setToasts] = React.useState([
    {
      message: 'Something went wrong!',
      variant: 'error',
      key: 1
    },
    {
      message: '17 photos uploaded',
      variant: 'success',
      key: 2
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      message: message,
      variant: variant,
      key: crypto.randomUUID()
    }
    const nextToasts = [...toasts, newMessage]
    setToasts(nextToasts)
  }

  const handleDelete = (key) => {

    const nextToasts = toasts.filter(item => {
      return item.key !== key
    })

    setToasts(nextToasts)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDelete={handleDelete}></ToastShelf>

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput}
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {VARIANT_OPTIONS.map(option => {
              return (
                <label htmlFor={option + '_variant'} key={option}>
                  <input
                    id={option + '_variant'}
                    type="radio"
                    name="selectVariant"
                    value={option}
                    checked={variant === option}
                    onChange={e => {
                      setVariant(e.target.value)
                    }}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={handleSubmit}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div >
  );
}

export default ToastPlayground;
