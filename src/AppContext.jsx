import { useDispatch, useSelector } from "./context/ProviderContext";

export default function AppContext() {
  const { value } = useSelector();
  const dispatch = useDispatch();

  return (
    <>
      <h1>Context API</h1>
      <section style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => dispatch({ TYPE: "DECREMENT" })}>
          DECREMENT
        </button>
        <span>{value}</span>
        <button onClick={() => dispatch({ TYPE: "INCREMENT" })}>
          INCREMENT
        </button>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ TYPE: "INCREMENT_BY_NUMBER", value: e.target.value })
          }
        />
      </section>
    </>
  );
}
