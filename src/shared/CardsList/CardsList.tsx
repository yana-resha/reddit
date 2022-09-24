import React, { useContext, useEffect, useRef, useState } from 'react';
import { Card } from './Card';
import styles from './cardslist.css';
import { postsContext } from '../Context/postsContext';
import { CommentListProvider } from '../Context/commentListProvider';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';



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
}

interface IContextPosts {
  after: string;
  posts: ICardListPosts[] | [];
  loading: boolean;
  errorMessage: string;
}

export function CardsList() {
  //@ts-ignore
  const info:IContextPosts = useContext(postsContext);
  const posts = info.posts;
  const bottomOfList = useRef<HTMLDivElement>(null);
  let cards;
  if (posts.length > 0) {
    cards = Array.from(posts).map(el => {
      return <CommentListProvider key={el.postID} children={<Card {...el} key={el.postID}></Card>} postID={el.postID} subreddit={el.subreddit}></CommentListProvider>
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(() => {
      console.log('load more')
    }, {
      rootMargin: '10px',
    });
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [bottomOfList.current])
  return (
    <ul className={styles.cardsList}>
      {cards}
      <div ref={bottomOfList}/>
    </ul>
  )
}

