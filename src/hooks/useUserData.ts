import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState} from "../store/reducer";
import { meRequest, meRequestAsync} from "../store/me/actions";



export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData () {
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading)
  const token = useSelector<RootState, string>(state => state.token.token);
  const dispatch = useDispatch();


  useEffect(() => {
    if (token.length > 0 && token !== 'undefined') {
        
      //@ts-ignore
      dispatch(meRequestAsync())
    }
  }, [token]);

  return {data, loading}
}