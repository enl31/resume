/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStudents } from './redux/actions/students';
import Students from './containers/Stundets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return <Students />;
}

export default App;
