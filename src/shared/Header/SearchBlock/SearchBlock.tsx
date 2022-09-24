import React, { useContext, useEffect } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';
import { useToken } from '../../../hooks/useToken';
import { useDispatch } from 'react-redux';


export function SearchBlock() {
  const {data, loading} = useUserData();


  
   
    return (
      <div className={styles.searchBlock}>
        <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
      </div>
    );
}

