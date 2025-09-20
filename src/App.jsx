import "./App.css";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TopClients from "./components/TopClients";
import FOClients from "./components/FOClients";
import ResignedDealer from "./components/ResignedDealer";
import Confirmations from "./components/Confirmations";
import BranchMonitoring from "./components/BranchMonitoring";
export default function App() {
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <Header />

      {/* Stat Cards Row */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <StatCard title="Existing Debarred Clients" value="5" color="bg-gray-800" />
        <StatCard
          title="Pending Pre-Trade Confirmations"
          value="12"
          color="bg-gray-800"
        />
        <StatCard title="Pending LOA/KYC" value="3" color="bg-gray-800" />
        <StatCard
          title="FsO Clients in Loss"
          value="6 | Rs 2.5Crore"
          color="bg-gray-800"
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <TopClients />
        <FOClients />
        <ResignedDealer />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Confirmations />
        <BranchMonitoring />
      </div>
    </div>
  );
}
