import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return { age: state.age + 1 };
  }
  throw Error("invalid action type");
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 22 });
  return (
    <>
      <button onClick={() => dispatch({ type: "incremented_age" })}>
        Increase age
      </button>
      <p>{state.age}</p>
    </>
  );
}
