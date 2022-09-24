import React, { useContext } from 'react';
import { useCommentsList } from '../../../hooks/useCommentsList';
import { CommentContextProvider } from '../../Context/commentContext';
import { commentList } from '../../Context/commentListProvider';
import { postsContext } from '../../Context/postsContext';
import { ICardListPosts } from '../CardsList';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';


export interface ICardPost {
  author: string;
  postCreated: number;
  icon: string;
  postLink: string;
  postTitle:string;
  userLink:string;
  postImg:string;
  postID:string;
  karmaCount: number;
  subreddit:string;
}

export interface IComments {
  author?:string;
  commentText?:string;
  created?:number;
  id?:string;
  parent_id?:string;
  ups?:number;
  replies?: IComments[];
}
      
export function Card(obj:ICardPost){
  const commentsList:IComments[] = useContext(commentList)
  let commentsCount;
  if (commentsList.length > 0) {
    commentsCount = commentsList.length;
  }
  return (
    <CommentContextProvider author={obj.author}>
      <li className={styles.card}>
        <TextContent         
        {...obj}/>
        <Preview img_src={obj.postImg}/>
        <Menu postID={obj.postID} />
        <Controls karmaCount={obj.karmaCount} commentsCount={commentsCount}/>
      </li>
    </CommentContextProvider>
  );
}


