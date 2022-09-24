import React, { useEffect } from 'react';
import { useToken } from '../../hooks/useToken';
import styles from './layout.css';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({children}: ILayoutProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
