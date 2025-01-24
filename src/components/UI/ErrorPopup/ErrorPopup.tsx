import React, { useState } from 'react';
import styles from './ErrorPopup.module.scss';

interface ErrorPopupProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, setMessage , setVisible, visible }) => {

  if (!visible) return null;

  return (
    <div className={styles.error_popup}>
      <div className={styles.error_message}>{message}</div>
      <button className={styles.close_button} onClick={() => {setVisible(false), setMessage('')}}>
        &times;
      </button>
    </div>
  );
};

export default ErrorPopup