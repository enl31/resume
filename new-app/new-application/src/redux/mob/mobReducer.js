import { BYE_MOB } from "./mobType";

const initialstate = {
  mobNumber: 100,
};

const mobReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BYE_MOB:
      return {
        ...state,
        mobNumber: state.mobNumber - 1,
      };
    default:
      return state;
  }
};
export default mobReducer;
