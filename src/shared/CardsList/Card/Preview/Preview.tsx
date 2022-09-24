import React from 'react';
import styles from './preview.css';

interface IImagePost {
  img_src: string;
}

export function Preview({img_src} : IImagePost) {
  return (
    <div className={styles.preview}>
      {img_src.includes('https') === true ? <img src={img_src} alt='post image' className={styles.previewImg}/> : <img src='https://cdn.dribbble.com/users/7824615/screenshots/15637984/media/0e5ae61db4bf5ad862c8facaab7ca22d.png?compress=1&resize=1000x750&vertical=top' alt='post image' className={styles.previewImg}/>}
    </div>
  );
}

