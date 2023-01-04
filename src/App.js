import "./App.css";
import { useState } from "react";
function App() {
  const [val, setVal] = useState();
  const change = (event) => {
    setVal(event.target.value);
  };
  return (
    <>
      <div class="grid grid-cols-3 gap-3">
        <div>
          <input onChange={change} value={val}></input>
        </div>
        <div>
          <label>{val}</label>
        </div>
        <div>Export</div>
      </div>
    </>
  );
}

export default App;
