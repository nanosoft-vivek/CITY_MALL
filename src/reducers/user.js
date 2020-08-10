
import {
  EDIT_DETAIL,
  SAVE_DETAIL,
  DELETE_DETAIL
} from '../actions/user-actions-types';

const initialState = {
  catObj:[],
};

export default function user(state = initialState, {
  payload, type,
}) {
  switch (type) {
   
    case SAVE_DETAIL:
    console.log(payload, type);
    let arr = state.catObj.slice();
    arr.push(payload);
    return {
      ...state,
      catObj: arr
    }
    case DELETE_DETAIL:
    return {
      ...state,
      catObj: payload
    }  
    case EDIT_DETAIL:
    return {
      ...state,
      catObj: payload
    }
    default:
    return state
  }
}

