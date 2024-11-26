import "./global.css";
import { Nav } from "./component/Nav/Nav";
import { Button } from "./component/Button/Button";

import { useState } from "react";

function App() {

const [inputData, setInputData] = useState("");

  return (
    <div>
      <Nav className={"Navbar"}></Nav>

        <form>
      <div className="inputFieldContainer">

        <label for="productName" className="inputFieldLabel">
          Product Name
        </label>
        <input
          type="text"
          className="inputFieldInput"
          name="productName"
          placeholder="eg. Ice Cream"
          value={inputData}
          onChange={(e) => {setInputData(e.target.value)}}
        />
      </div>

      <Button label={"Add Order"}></Button>
    </form>
    </div>
  );
}

export default App;
