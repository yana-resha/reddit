import { useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../store/reducer";
import { tokenRequestAsync} from "../store/token/actions";




export function useToken () {


  const token = useSelector<RootState, string>(state => state.token.token);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (token.length === 0) {
    //@ts-ignore
    dispatch(tokenRequestAsync())
    }
  })
}