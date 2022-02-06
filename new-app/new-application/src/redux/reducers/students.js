import { FETCH_STUDENTS_SUCCESS } from '../actions/students';

const initialstate = [];

const students = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
export default students;
