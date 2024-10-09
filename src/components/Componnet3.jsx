import React, { useReducer } from "react";

const Componnet3 = () => {
  const intialstate = { count: 0 };

  const reducerfun = (state = intialstate, action) => {
    switch (action.type) {
      case "INCRIMENT":
        return { count: state.count + 1 };
      case "DICREMENT":
        return { count: state.count - 1 };
      case "input":
        return { count: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerfun, intialstate);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCRIMENT" })}>
        incrimnent
      </button>
      <button onClick={() => dispatch({ type: "DICREMENT" })}>dicremnt</button>

      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
      />
    </div>
  );
};

export default Componnet3;
