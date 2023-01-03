import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { IComments } from '../../../store/posts/actions';
import { RootState } from '../../../store/reducer';


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
  comments: IComments[];
}

  
export function Card(obj:ICardPost){

  let post = useSelector<RootState, any>(state => state.posts.data);
  const commentsCount = post.filter((el: { postID: string; }) => el.postID == obj.postID)[0].comments.length;
  //const commentsList:any =  useSelector<RootState, string>();
  // let commentsCount;
  // if (commentsList.length > 0) {
  //   commentsCount = commentsList.length;
  // }
  return (
      <li className={styles.card}>
        <TextContent         
        {...obj}/>
        <Preview img_src={obj.postImg}/>
        <Menu postID={obj.postID} />
        <Controls karmaCount={obj.karmaCount} commentsCount={commentsCount}/>
      </li>

  );
}


