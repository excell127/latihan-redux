import { createContext, useContext, useReducer } from "react";

export const Context = createContext(null);

const initialState = {
  value: 0,
};

const reducer = (state, action) => {
  switch (action.TYPE) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value++,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value--,
      };
    case "INCREMENT_BY_NUMBER":
      return {
        ...state,
        value: action.value,
      };

    default:
      throw new Error("Reducer type not found");
  }
};

export default function Provider({ children }) {
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ value: value, dispatch: dispatch }}>
      {children}
    </Context.Provider>
  );
}

export function useSelector() {
  const { value } = useContext(Context);

  return value;
}

export function useDispatch() {
  const { dispatch } = useContext(Context);

  return dispatch;
}
