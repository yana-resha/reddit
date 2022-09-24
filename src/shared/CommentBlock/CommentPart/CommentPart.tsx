import React, { useRef, useState } from 'react';
import { Break } from '../../Break';
import { IComments } from '../../CardsList/Card';
import { KarmaCounter } from '../../CardsList/Card/Controls/KarmaCounter';
import { PublicDate } from '../../CardsList/Card/TextContent/PublicDate';
import { UserLink } from '../../CardsList/Card/TextContent/UserLink';
import { CommentForm } from '../../CommentForm';
import { CommentFormUnControlled } from '../../CommentFormUnControlled';
import { CommentContextProvider} from '../../Context/commentContext';
import {repliesCommentContext, RepliesCommentContextProvider } from '../../Context/RepliesCommentContext'
import { IconReplies } from '../../Icons';
import { CommentBlock } from '../CommentBlock';
import { CommentButtonContainer } from './CommentButtonContainer';
import { ComplainButton } from './CommentButtonContainer/ComplainButton';
import { ShareCommentButton } from './CommentButtonContainer/ShareCommentButton';
import styles from './commentpart.css';

interface ICommentFormProps{
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  
}

const NOOP = () => {};


export function CommentPart(obj:IComments, {isOpen, onClose = NOOP, onOpen = NOOP}:ICommentFormProps) {


  function createComment (obj: IComments) {
    const [isFormOpen, setIsFormOpen] = React.useState(isOpen);
    React.useEffect(() => setIsFormOpen(isOpen), [isOpen])
    React.useEffect(() => isFormOpen ? onOpen(): onClose(), [isFormOpen])

    function handleOpen(): void {
      setIsFormOpen(!isFormOpen)
      if (isOpen === undefined) {
        setIsFormOpen(!isFormOpen)
      }
    }

    let children;
    if (obj.replies !== undefined && obj.replies?.length > 0) {
      let moreReplies = obj.replies.map(el => createComment(el))
      children = <ul>{moreReplies}</ul>
      
    }
    let comment = 
    // <RepliesCommentContextProvider author={obj.author}>
    <li className={styles.listPart} key={obj.id}>
      <div className={styles.commentHeader}>
        <UserLink userName={obj.author}></UserLink>
        <Break size={4}></Break>
        <PublicDate postCreated={obj.created}></PublicDate>
      </div>
      <p className={styles.commentText}>{obj.commentText}</p>
      <CommentButtonContainer karmaCount={obj.ups} onOpen={handleOpen} />
      {isFormOpen && (
        <CommentFormUnControlled author={obj.author} context={repliesCommentContext} onClose={() => {setIsFormOpen(false)}}/>
      )}
      {children}
    </li>
  // </RepliesCommentContextProvider>

  return comment
  }



  return (
    createComment(obj)
  );
}
