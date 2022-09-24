import React from 'react';
import styles from './commentform.css';
import { useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { updateComment } from '../../store/reducer';


type IForm = {
  value: string;
}



export function CommentForm({value}: IForm) {
  
  const dispatch = useDispatch();

  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: {
      "comment": value,
    },
  });
  const onSubmit = (data: any) => {
    dispatch(updateComment(data.comment))
    console.log(data)
  };

  return (
    <form className={styles.form} onSubmit = {handleSubmit(onSubmit)} >
      <textarea className={styles.input}
      {...register("comment", {
        // required: "this is a required",
        minLength: {
          value: 3,
          message: "Введите больше 3-x символов"
        }
      
      })}
      aria-invalid={errors.comment?.type === 'required' ? 'true' : undefined}
      >

      </textarea>
      {errors.comment && <div>{errors.comment.message}</div>}
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
   );
  
}
