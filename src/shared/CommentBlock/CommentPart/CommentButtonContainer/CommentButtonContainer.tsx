import React from 'react';
import { Break } from '../../../Break';
import { KarmaCounter } from '../../../CardsList/Card/Controls/KarmaCounter';
import { ShareButton } from '../../../CardsList/Card/Controls/ShareButton';
import styles from './commentbuttoncontainer.css';
import { ComplainButton } from './ComplainButton';
import { RepliesButton } from './RepliesButton';
import { ShareCommentButton } from './ShareCommentButton';


interface IChildren {
  karmaCount?: number;
  onOpen?: () => void;
} 
const NOOP = () => {};

export function CommentButtonContainer({karmaCount = 0, onOpen = NOOP}:IChildren) {
  return (
    <div className={styles.buttonContainer}>
      <span className={styles.karmaCounter}>
        <KarmaCounter karmaCount={karmaCount}></KarmaCounter>
        <Break size={20}></Break>
      </span>
      <RepliesButton onOpen={onOpen}/>
      <div className={styles.rigthGroupButton}>
        <Break size={20}></Break>
        <ComplainButton />
        <Break size={20}></Break>
        <ShareCommentButton/>
      </div>
    </div>
  );
}
