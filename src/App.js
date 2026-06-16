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

const Dashboard = () => (
  <>
    <FinanceDasboard />
    <KPI />
    <Charts />
    <Recent />
  </>
);

const EmptyPage = ({ title, subtitle }) => (
  <section className="empty-page">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </section>
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
            <Route
              path="/financial-reports"
              element={
                <EmptyPage
                  title="Financial Reports"
                  subtitle="Reports page is ready for your next component."
                />
              }
            />
            <Route
              path="/refunds"
              element={
                <EmptyPage
                  title="Refunds"
                  subtitle="Refund tracking page is ready for your next component."
                />
              }
            />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
