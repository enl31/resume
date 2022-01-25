/*eslint-disable*/
import React, { useState } from "react";
import axios from "axios";
const initialstate = {
  name: "",
  job: "",
};

const Testform = () => {
  const [state, setState] = useState(initialstate);

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Enter your name : </label>

        <input
          type="text"
          name="name"
          value={state.name || ""}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Enter your job : </label>
        <input
          type="text"
          name="job"
          value={state.job || ""}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default Testform;
