import React from 'react';
import styles from './userblock.css';
import {Text, EColors} from '../../../Text'
import { IconAnon } from '../../../Icons';
import { Break } from '../../../Break';
import { Link } from 'react-router-dom';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({avatarSrc, username, loading}: IUserBlockProps) {
  return (
    <a href='https://www.reddit.com/api/v1/authorize?client_id=YXxs90nMyhV_5fYlczthJA&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity' className={styles.userBox}>
   
    <div className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
                    
        ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage}/>
        : <IconAnon />
        }
        
      </div>
      <div className={styles.username}>
        <Break size={12}></Break>
        {loading === true ? (
          <Text size={20} color={username ? EColors.black : EColors.grey99}>Загрузка</Text>
          ) 
          : (<Text size={20} color={username ? EColors.black : EColors.grey99}>{username  || 'Аноним' }</Text>)
        }
        
      </div>
    </div>
    </a>
  );
}

