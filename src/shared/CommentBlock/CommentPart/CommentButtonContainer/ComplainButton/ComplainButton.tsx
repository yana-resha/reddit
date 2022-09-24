import React from 'react';
import { Break } from '../../../../Break';
import { IconComplain } from '../../../../Icons';
import styles from './complainbutton.css';



export function ComplainButton() {
  return (
    <button className={styles.complainButton}>
      <IconComplain></IconComplain>
      <Break size={4}></Break>
      <span className={styles.buttonText}>Пожаловаться</span>
    </button>
  );
}
