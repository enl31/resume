import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { byemob } from "../redux/mob/mobAction";

function Container() {
  const numberMob = useSelector((state) => state.mobNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Total Number : {numberMob}</h1>
      <button onClick={() => dispatch(byemob())}>Increment</button>
    </div>
  );
}

export default Container;
