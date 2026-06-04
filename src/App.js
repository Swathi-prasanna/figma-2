import logo from "./logo.svg";
import "./App.css";
import StaticComponents from "./tasks/StaticComponents";
import DynamicComponents from "./tasks/DynamicComponents";
import objects from "./tasks/Objects";
import Objects from "./tasks/Objects";
import Hooks from "./tasks/Hooks";
import Ternary from "./tasks/Ternary";
import EmployeeDetails from "./tasks/EmployeeDetails";
// import './tasks/Sample.css';
import LiveNameDisplay from "./tasks/LiveNameDisplay";
import Counterapp from "./tasks/Counterapp";
import Charactercounter from "./tasks/Charactercounter";
import Login from "./tasks/Login";
import Header from "./Multiplepages/Header";
import "./Multiplepages/Styling.css";
import About from "./Multiplepages/About";
import Services from "./Multiplepages/Services";
import Projects from "./Multiplepages/Projects";
import Business from "./Multiplepages/Business";
import Pricing from "./Multiplepages/Pricing";
import ClientsTestinomials from "./Multiplepages/ClientsTestinomials";
import Blogs from "./Multiplepages/Blogs";
import Footer from "./Multiplepages/Footer";

function App() {
  return (
    <div className="App">
      {/* <StaticComponents/>
      <DynamicComponents/>
      <Objects/> */}
      {/* <Hooks/> */}
      {/* <Ternary/> */}
      {/* <EmployeeDetails/> */}
      {/* <LiveNameDisplay/> */}
      {/* <Counterapp/> */}
      {/* <Charactercounter/> */}
      {/* <Login/> */}
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Business/>
      <Pricing/>
      <ClientsTestinomials/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
