import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './layout.css';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({children}: ILayoutProps) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  

  useEffect(() => { 
    // navigate('/posts');
  }, [])

 

  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}


