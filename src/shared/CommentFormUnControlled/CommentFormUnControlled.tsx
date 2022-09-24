import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import styles from './commentformuncontrolled.css';
import {repliesCommentContext} from '../Context/RepliesCommentContext'
type CommentContextType =  {
  defaultValue: string;
  onChange: (value: string) => void;
}

interface IForm {
  author?: string;
  onClose?: () => void;
  context: React.Context<CommentContextType>;
}

export function CommentFormUnControlled({onClose, context, author}: IForm) {
  const {defaultValue, onChange} = useContext(context)

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    function handleClick (event: MouseEvent) {

      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
       
        onClose?.();
      }
    }

    
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, []);




  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value)
    return false
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <textarea className={styles.input} defaultValue={`${author}, `} ref={ref} ></textarea>
      <button type='submit' onClick={handleSubmit} className={styles.button}>Комментировать</button>
    </form>
  );
}