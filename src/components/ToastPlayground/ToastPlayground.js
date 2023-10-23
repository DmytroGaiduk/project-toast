import React from 'react';
import Button from '../Button';
import Toast from '../Toast'

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [variant, setVariant] = React.useState('notice')
  const [message, setMessage] = React.useState('test')


  const [visible, setVisible] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {visible && <Toast variant={variant} setVisible={setVisible} visible={visible}>{message}</Toast>}


      <div className={styles.controlsWrapper}>
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
            <Button onClick={() => setVisible(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
