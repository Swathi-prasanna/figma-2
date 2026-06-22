import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Hospital Website/Sidebar";
import Navbar from "./Hospital Website/Navbar";
import FinanceDasboard from "./Hospital Website/FinanceDasboard";
import KPI from "./Hospital Website/KPI";
import Charts from "./Hospital Website/Charts";
import Recent from "./Hospital Website/Recent transaction";
import InvoicingBilling from "./Hospital Website/InvoicingBilling";
import Receivables from "./Hospital Website/Receivables";
import FInanceReport from "./Hospital Website/FInanceReport";
import Refunds from "./Hospital Website/Refunds";

const Dashboard = () => (
  <>
    <FinanceDasboard />
    <KPI />
    <Charts />
    <Recent />
  </>
);



function App() {
  return (
    <div className="App">
      <div className="app-layout">
        <Sidebar />
        <main className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoicing" element={<InvoicingBilling />} />
            <Route path="/receivables" element={<Receivables />} />
            <Route path="/financial-reports" element={<FInanceReport />} />
            <Route path="/refunds" element={<Refunds />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
