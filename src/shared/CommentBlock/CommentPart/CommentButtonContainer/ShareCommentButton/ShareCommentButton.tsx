import React from 'react';
import { Break } from '../../../../Break';
import { IconShare } from '../../../../Icons';
import styles from './sharecommentbutton.css';

export function ShareCommentButton() {
  return (
    <button className={styles.shareCommentButton}>
     <IconShare></IconShare>
     <Break size={4}></Break>
     <span className={styles.buttonText}>Поделиться</span>
    </button>
  );
}
