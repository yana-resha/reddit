import React from 'react';
import { IconAnon } from '../../../../Icons';
import styles from './userlink.css';

interface IUserLinkProps{
  img_src?: string;
  userName?: string;
  userLink?: string;
}

export function UserLink({img_src, userName, userLink}: IUserLinkProps) {
  return (
    <div className={styles.userLink}>

      {img_src ? <img src={img_src} alt='user avatar' className={styles.avatar}/> : <IconAnon />}
      <a href={userLink} className={styles.username}>{userName}</a>
    </div>
  );
}
