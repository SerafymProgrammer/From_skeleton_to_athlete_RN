// reducers/people.js
import {ADD_PERSON, DELETE_PERSON} from '../../../environments';

const initialState = {
  allTrainingDays: [],
  selectedDay: null,
  isUpdated: false,
};

export default function sheduleReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_DAYS':
      return {
        ...state,
        allTrainingDays: action.allTrainingDays,
      };
    case 'GET_SELECTED_DAY':
      return {
        ...state,
        selectedDay: action.selectedDay,
      };
    default:
      return state;
  }
}
