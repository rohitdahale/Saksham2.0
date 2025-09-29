import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import TeacherSidebar from "@/components/teacher/TeacherSidebar";
import TeacherOverview from "@/components/teacher/TeacherOverview";
import StudentProgress from "@/components/teacher/StudentProgress";
import ContentManagement from "@/components/teacher/ContentManagement";
import Assessments from "@/components/teacher/Assessments";
import Communications from "@/components/teacher/Communications";
import Analytics from "@/components/teacher/Analytics";

const TeacherDashboard = () => {
  return (
    <DashboardLayout
      title="Teacher Dashboard"
      userType="teacher"
      sidebar={<TeacherSidebar />}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/teacher/overview" replace />} />
        <Route path="/overview" element={<TeacherOverview />} />
        <Route path="/students" element={<StudentProgress />} />
        <Route path="/content" element={<ContentManagement />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </DashboardLayout>
  );
};

export default TeacherDashboard;