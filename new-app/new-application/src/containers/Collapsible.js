import React, { useState } from 'react';
import './App.css';

const Collasible = ({ grades, id }) => {
  const [isReadmore, setReadmore] = useState(false);
  const [state, setState] = useState([]);
  const changeHandler = () => {
    const result = grades.map((item, i) => {
      return (
        <div key={i}>
          {`Test ${i + 1}`} : {item}
        </div>
      );
    });
    setState(result);
    setReadmore(!isReadmore);
  };

  return (
    <div className="collapsible">
      <span onClick={changeHandler} className="btn">
        {isReadmore ? (
          <div className="result">
            {state}
            <i className="fas fa-minus"></i>
          </div>
        ) : (
          <div>
            <i className="fas fa-plus"></i>
          </div>
        )}
      </span>
    </div>
  );
};

export default Collasible;
