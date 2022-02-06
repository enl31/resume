import { getStudents } from '../../api/students';

export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_START = 'FETCH_STUDENTS_START';

const fetchStudentsStart = () => ({
  type: FETCH_STUDENTS_START,
});

const fetchStudentsSuccess = payload => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload,
});

export const fetchStudents = () => (dispatch, getState) => {
  dispatch(fetchStudentsStart());
  getStudents()
    .then(({ data }) => data)
    .then(({ students }) => dispatch(fetchStudentsSuccess(students)));
};
