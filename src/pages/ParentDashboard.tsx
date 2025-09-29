import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import ParentSidebar from "@/components/parent/ParentSidebar";
import ParentOverview from "@/components/parent/ParentOverview";
import ChildProgress from "@/components/parent/ChildProgress";
import Communication from "@/components/parent/Communication";
import Reports from "@/components/parent/Reports";

const ParentDashboard = () => {
  return (
    <DashboardLayout
      title="Parent Dashboard"
      userType="parent"
      sidebar={<ParentSidebar />}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/parent/overview" replace />} />
        <Route path="/overview" element={<ParentOverview />} />
        <Route path="/progress" element={<ChildProgress />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </DashboardLayout>
  );
};

export default ParentDashboard;