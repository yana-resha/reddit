import React, { useContext } from 'react';
import { UserLink } from '../CardsList/Card/TextContent/UserLink';
import { EColors } from '../Text';
import styles from './commentblock.css';
import luxon, {DateTime, Duration, Interval} from 'luxon'
import humanizeDuration from 'humanize-duration';
import { Title } from '../CardsList/Card/TextContent/Title';
import { TextContent } from '../CardsList/Card/TextContent';
import { IComments } from '../CardsList/Card';
import { commentList } from '../Context/commentListProvider';
import { PublicDate } from '../CardsList/Card/TextContent/PublicDate';
import { CommentPart } from './CommentPart';





export function CommentBlock() {
  const commentsList:IComments[] = useContext(commentList)
  let commentsPart;
  if (commentsList.length > 0) {
    commentsPart = commentsList.map(element => {
      return <CommentPart {...element} key={element.id}></CommentPart>
    });
  }
  return (
    <ul className={styles.list}>
      {commentsPart}
    </ul>
  );
}
