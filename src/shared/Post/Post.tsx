import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import { RootState } from '../../store/reducer';
import { CommentBlock } from '../CommentBlock';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';

interface IPost {
  onClose?: () => void;
}

export function Post(props: IPost) {

  const {id} = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  let postList = useSelector<RootState, any>(state => state.posts.data);
  let post = postList.filter((el: { postID: string; }) => el.postID == id);

  useEffect(() => {
    function handleClick (event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/posts')
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
      <h2>{post[0].postTitle}</h2>

      <div className={styles.content}>
        <p>Текст</p>
        <p>Текст</p>
        <p>Текст</p>
      </div>
      
      <CommentFormContainer/>
      <CommentBlock id={id}/>
    </div>
  ), node)
}
