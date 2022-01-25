import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Collasible from "./Collapsible";

function App() {
  const [state, setState] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");
  const [filter, setFilter] = useState([]);

  const onChangeHandler = (e) => {
    const query = e.target.value;
    let result = [];
    setSearchvalue(query);
    result = state.filter((data) => {
      return data.firstName
        .toLowerCase()
        .match(searchvalue.toLocaleLowerCase());
    });
    console.log(result);
    setFilter(result);
  };

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        setState(data.students);
        setFilter(data.students);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <input
        className="filter"
        type="text"
        placeholder="Search by name"
        valu={searchvalue}
        onChange={onChangeHandler}
      />
      <div className="righ"></div>
      <div className="left">
        {searchvalue && searchvalue.length > 0
          ? filter.map((item) => (
              <div key={item.id}>
                <Collasible {...item} />
                <Card {...item} />
              </div>
            ))
          : state.map((item) => (
              <div key={item.id}>
                <Collasible {...item} />
                <Card {...item} />
              </div>
            ))}
      </div>
    </>
  );
}

export default App;
