import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import StudentSidebar from "@/components/student/StudentSidebar";
import StudentOverview from "@/components/student/StudentOverview";
import LearningPath from "@/components/student/LearningPath";
import DigitalLiteracy from "@/components/student/DigitalLiteracy";
import Achievements from "@/components/student/Achievements";
import Progress from "@/components/student/Progress";

const StudentDashboard = () => {
  return (
    <DashboardLayout
      title="Student Dashboard"
      userType="student"
      sidebar={<StudentSidebar />}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/student/overview" replace />} />
        <Route path="/overview" element={<StudentOverview />} />
        <Route path="/learning" element={<LearningPath />} />
        <Route path="/digital-literacy" element={<DigitalLiteracy />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </DashboardLayout>
  );
};

export default StudentDashboard;