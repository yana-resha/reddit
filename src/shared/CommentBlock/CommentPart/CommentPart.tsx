import React, { useRef, useState } from 'react';
import { Break } from '../../Break';
import { PublicDate } from '../../CardsList/Card/TextContent/PublicDate';
import { UserLink } from '../../CardsList/Card/TextContent/UserLink';
import { CommentFormUnControlled } from '../../CommentFormUnControlled';
import {repliesCommentContext, RepliesCommentContextProvider } from '../../Context/RepliesCommentContext'
import { CommentButtonContainer } from './CommentButtonContainer';
import styles from './commentpart.css';

interface ICommentFormProps{
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: any
}


const NOOP = () => {};


export function CommentPart({children , obj}:any , {isOpen, onClose = NOOP, onOpen = NOOP}:ICommentFormProps ) {

    const [isFormOpen, setIsFormOpen] = React.useState(isOpen);
    React.useEffect(() => setIsFormOpen(isOpen), [isOpen])
    React.useEffect(() => isFormOpen ? onOpen(): onClose(), [isFormOpen])
  
    function handleOpen(): void {
      setIsFormOpen(!isFormOpen)
      if (isOpen === undefined) {
        setIsFormOpen(!isFormOpen)
      }
    }

    return (
        <li className={styles.listPart}>
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
      )
}
