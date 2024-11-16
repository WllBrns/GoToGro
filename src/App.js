import "./global.css";
import { Nav } from "./component/Nav/Nav";
import { Button } from "./component/Button/Button";

function App() {
  return (
    <div>
      <Nav className={"Navbar"}></Nav>
      {/* <Button label={"Add Order"}></Button> */}
    </div>
  );
}

export default App;
