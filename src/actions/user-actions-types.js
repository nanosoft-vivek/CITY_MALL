import { createAction } from 'redux-actions';

export const SAVE_DETAIL = "SAVE_DETAIL";
export const EDIT_DETAIL = "EDIT_DETAIL";
export const DELETE_DETAIL = "DELETE_DETAIL";

export function saveDetail (obj, check, totalObj) {
  if (check != "none") {
    totalObj[check] = obj;
    return {
      type : EDIT_DETAIL,
      payload : totalObj,
    }
  } else {
    return {
      type : SAVE_DETAIL,
      payload : obj,
    }
  }
  
}

export function deleteDetail (obj, key) {
  let s = [];
  console.log(obj, key);
  for (let i in obj) {
    if (i != key) {
      s.push(obj[i]);
    }
  }
  return {
    type : DELETE_DETAIL,
    payload : s,
  }
}


