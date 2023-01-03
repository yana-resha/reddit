import React, { useContext } from 'react';
import styles from './commentblock.css';
import { CommentPart } from './CommentPart';
import { IComments } from '../../store/posts/actions';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';






export function CommentBlock({id}:any) {
  let post = useSelector<RootState, any>(state => state.posts.data);
  let commentsList = post.filter((el: { postID: string; }) => el.postID == id)[0].comments;

  
  let commentsPart;

  function createComment(el:IComments) {
    let replies;
    let children;
    if (el.replies !== undefined && el.replies.length > 0) {
      replies = el.replies.map(element => createComment(element))
    }
    if (replies !== undefined && replies.length > 0) {
      children = <ul>{replies}</ul>
    }
    return <CommentPart children={children} obj={el} key={el.id}></CommentPart>
  }

  if (commentsList.length > 0) {
    commentsPart = commentsList.map((el: IComments) => {
      return createComment(el)
    })
  }
  return (
    <ul className={styles.list}>
      {commentsPart}
    </ul>
  );
}
