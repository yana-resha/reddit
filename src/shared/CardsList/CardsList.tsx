import React, {useEffect, useRef, useState } from 'react';
import { Card} from './Card';
import styles from './cardslist.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { IComments } from '../../store/posts/actions';
import {postsRequestAsync} from '../../store/posts/actions'
import { ICardPost } from './Card/Card';
import { Route, Routes } from 'react-router-dom';
import { Post } from '../Post';



export interface ICardListPosts {
  author: string;
  postCreated: number;
  icon: string;
  postLink: string;
  postTitle:string;
  userLink:string;
  postImg:string;
  postID:string;
  karmaCount: number;
  subreddit:string;
  comments: IComments[];
}

export function CardsList() {
  const token = useSelector<RootState, string>(state => state.token.token);
  const dispatch = useDispatch();
  let post = useSelector<RootState, any>(state => state.posts.data);
  let countLoad = useSelector<RootState, any>(state => state.posts.load);
  let loading = useSelector<RootState, any>(state => state.posts.loading);
  let errorLoading = useSelector<RootState, any>(state => state.posts.error);
  const [tokenError, setTokenError] = useState('');
  const bottomOfList = useRef<HTMLDivElement>(null);
  
  const [buttonLoad, setButtonLoad] = useState(false);

  function buttonClickLoad () {

    countLoad = 1;
    //@ts-ignore
    dispatch(postsRequestAsync(countLoad));
    setButtonLoad(false);
    console.log(countLoad);
      
  }


  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
    
      if (entries[0].isIntersecting) {

        if (token.length <= 0) {
          setTokenError('Пожалуйста авторизуйтесь');
        } else {
          setTokenError('');
        }
        
        if (token.length > 0 && countLoad <= 2) {
          countLoad +=1;
          setButtonLoad(false);
          //@ts-ignore
          dispatch(postsRequestAsync(countLoad));
          console.log(countLoad)
          if (token.length > 0 && countLoad == 3) {
            countLoad +=1;
            console.log(countLoad);
  
          }

        }
        
        if (token.length > 0 && countLoad == 4) {
          setButtonLoad(true);
        }
      }
    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) observer.observe(bottomOfList.current);

    return () => {

      if (bottomOfList.current) observer.unobserve(bottomOfList.current);

    }
  }, [bottomOfList.current, token, countLoad]);


  return (
    <ul className={styles.cardsList}>
      <Routes>
        <Route path=":id" element={<Post/>}></Route>
      </Routes>
      {post.map((el: JSX.IntrinsicAttributes & ICardPost) => {
      return  <Card {...el} key={el.postID}></Card>})}
      <div ref={bottomOfList}/>
      {loading && (<div style={{textAlign: 'center'}}>Загрузка...</div>)}
      {errorLoading && (
        <div style={{textAlign: 'center'}} role='alert'>
          {errorLoading}
        </div>
      )}
      {tokenError && (
        <div style={{textAlign: 'center'}} role='alert'>
          {tokenError}
        </div>
      )}
      {buttonLoad && (
        <div style={{textAlign: 'center'}}>
          <button onClick={buttonClickLoad} className={styles.buttonLoad}>
            Загрузить еще
          </button>
        </div>
      )}
    </ul>

  )
}



