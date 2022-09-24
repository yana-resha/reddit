import React from 'react';
import { useSelector } from 'react-redux';
import { RootState} from '../../store/reducer';
import { CommentForm } from '../CommentForm/CommentForm';
import { useDispatch } from 'react-redux';

export function CommentFormContainer() {

  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch();

  return (
    <CommentForm value={value}/>
  );
}
