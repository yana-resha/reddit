import React, { useContext, useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';
import {Link, Route, Routes} from 'react-router-dom'

interface ITitleInterface {
  postTitle: string;
  postLink: string;
  postID:string;
  subreddit:string;
}

export function Title({postTitle, postLink, postID, subreddit}:ITitleInterface) {

  const [isModalOpened, setIsModalOpen] = useState(false)

  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${postID}`} className={styles.postLink}>{postTitle}</Link>
    </h2>
  );
}
