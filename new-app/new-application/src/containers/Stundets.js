import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Collasible from './Collapsible';

const Students = () => {
  const students = useSelector(({ students }) => students);

  const [searchvalue, setSearchvalue] = useState('');
  const [filter, setFilter] = useState(students);

  useEffect(() => {
    if (students.length && !filter.length) {
      setFilter(students);
    }
  }, [setFilter, filter, students]);

  const onChangeHandler = e => {
    const query = e.target.value;
    let result = [];
    setSearchvalue(query);
    result = students.filter(data => data.firstName.toLowerCase().match(query));
    setFilter(result);
  };

  return filter.length ? (
    <>
      <input
        className="filter"
        type="text"
        placeholder="Search by name"
        valu={searchvalue}
        onChange={onChangeHandler}
      />
      <div className="righ">
        {filter.map(item => (
          <div key={item.id}>
            <Collasible {...item} />
            <Card {...item} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <span>loading...</span>
  );
};

export default Students;
