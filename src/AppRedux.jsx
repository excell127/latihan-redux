import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByNumber,
  useCounterValue,
} from "../features/counter/counter";

export default function AppRedux() {
  const dispatch = useDispatch();
  const value = useCounterValue();

  return (
    <>
      <h1>Redux</h1>
      <section style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        <span>{value}</span>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <input
          type="text"
          onChange={(e) =>
            dispatch(incrementByNumber({ value: e.target.value }))
          }
        />
      </section>
    </>
  );
}
