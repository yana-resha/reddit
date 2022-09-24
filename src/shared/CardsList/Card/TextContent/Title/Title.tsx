import React, { useContext, useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';
import {IComments} from '../../Card'

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
      <a href={'#url'}className={styles.postLink} onClick={() => {setIsModalOpen(true)}}>{postTitle}</a>
      {isModalOpened && (
        
        <Post 
          onClose={() => { setIsModalOpen(false); } }/>
      )}
    </h2>
  );
}
