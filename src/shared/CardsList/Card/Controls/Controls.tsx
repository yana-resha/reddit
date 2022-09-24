import React from 'react';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';


export interface IButtonProps {
 karmaCount?:number;
 commentsCount?: number;
}

export function Controls({karmaCount, commentsCount}:IButtonProps) {
  return (
    <div className={styles.controls}>
      {/* karmaCounter */}
      <KarmaCounter karmaCount={karmaCount} />
      {/* comments */}
      <CommentsButton commentsCount={commentsCount}/>
      {/* actions останутся в controls */}
      <div className={styles.actions}>
        {/* shareButton отдельный компонент */}
        <ShareButton />
        {/*saveButton отдельный компонент */}
        <SaveButton />
      </div>
    </div>
  );
}
