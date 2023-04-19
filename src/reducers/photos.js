import { SET_PHOTOS } from "../actions/types";

const initialState = {
  photos: [],
}

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state, photos: action.payload
      }
    default:
      return state;
  }

};
