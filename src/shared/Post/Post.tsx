import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentBlock } from '../CommentBlock';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';

interface IPost {
  onClose?: () => void;
}

export function Post(props: IPost) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick (event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, []);

  const node = document.querySelector('#modal-root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Какой то заголовок</h2>

      <div className={styles.content}>
        <p>Текст</p>
        <p>Текст</p>
        <p>Текст</p>
      </div>
      
      <CommentFormContainer/>
      
      <CommentBlock />
    </div>
  ), node)
}
