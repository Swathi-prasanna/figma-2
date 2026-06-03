import logo from "./logo.svg";
import "./App.css";
import StaticComponents from "./tasks/StaticComponents";
import DynamicComponents from "./tasks/DynamicComponents";
import objects from "./tasks/Objects";
import Objects from "./tasks/Objects";
import Hooks from "./tasks/Hooks";
import Ternary from "./tasks/Ternary";
import EmployeeDetails from "./tasks/EmployeeDetails";
import './tasks/Sample.css';

function App() {
  return (
    <div className="App">
      {/* <StaticComponents/>
      <DynamicComponents/>
      <Objects/> */}
      {/* <Hooks/> */}
      {/* <Ternary/> */}
      <EmployeeDetails/>
    </div>
  );
}

export default App;
