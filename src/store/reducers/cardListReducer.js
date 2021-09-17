import {
  FETCH_CHARACTERS, CHANGE_LOADER, ERROR_FETCHING_PERSONS
} from '../actionTypes/newCharacters';

const initialState = {
  characters: [],
  isFetching: false,
  isError: false,
};

const cardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case CHANGE_LOADER:
      return {
        ...state,
        isFetching: action.payload,
      };
    case ERROR_FETCHING_PERSONS:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state
  }
};
export default cardListReducer;