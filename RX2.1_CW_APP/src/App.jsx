import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={(e) => handleClick("add")}>Add</button> <br />
        <button onClick={(e) => handleClick("minus")}>Minus</button>
      </div>
    </>
  );
}

export default App;
