import React from 'react';
import Button from '../Button';
import ToastShelf from '../ToastShelf'
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const { handleCreateToast } = React.useContext(ToastContext);


  const [variant, setVariant] = React.useState('notice')
  const [message, setMessage] = React.useState('test')

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCreateToast(message, variant);


    setMessage('');
    setVariant(VARIANT_OPTIONS[0])
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf ></ToastShelf>

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
            <Button onClick={handleSubmit} >Pop Toast!</Button>

          </div>
        </div>
      </form>
    </div >
  );
}

export default ToastPlayground;
