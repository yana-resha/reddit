import React from 'react';
import { ICardPost } from '../Card';
import { PublicDate } from './PublicDate';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';




export function TextContent(obj:ICardPost) {
  
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink userName={obj.author} img_src={obj.icon} userLink={obj.userLink}/>
        <PublicDate postCreated={obj.postCreated}></PublicDate>
      </div>
      <Title postLink={obj.postLink} postTitle={obj.postTitle} postID={obj.postID} subreddit={obj.subreddit}/>
    </div>
  );
}

