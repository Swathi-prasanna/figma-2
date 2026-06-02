import logo from "./logo.svg";
import "./App.css";
import StaticComponents from "./tasks/StaticComponents";
import DynamicComponents from "./tasks/DynamicComponents";
import objects from "./tasks/Objects";
import Objects from "./tasks/Objects";

function App() {
  return (
    <div className="App">
      <StaticComponents/>
      <DynamicComponents/>
      <Objects/>
    </div>
  );
}

export default App;
