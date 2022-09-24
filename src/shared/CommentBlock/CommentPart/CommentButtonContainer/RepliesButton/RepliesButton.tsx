import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Break } from '../../../../Break';
import { CommentForm } from '../../../../CommentForm';
import { IconReplies } from '../../../../Icons';
import { CommentPart } from '../../CommentPart';
import styles from './repliesbutton.css';


interface IButtonInterface {
  onOpen?: () => void;
} 
const NOOP = () => {};

export function RepliesButton({onOpen = NOOP}:IButtonInterface) {
  
  return (
    <button onClick={onOpen} className={styles.repliesButton}>
      <IconReplies/>
      <Break size={4}></Break>
      <span className={styles.buttonText}>Ответить</span>
    </button>
  );
}
