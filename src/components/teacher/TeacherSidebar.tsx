import { NavLink, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  BarChart3, 
  Users, 
  FileText, 
  MessageSquare, 
  BookOpen,
  TrendingUp,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TeacherSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Overview",
      icon: Home,
      path: "/teacher/overview",
      badge: null
    },
    {
      title: "Student Progress",
      icon: Users,
      path: "/teacher/students",
      badge: "3 alerts"
    },
    {
      title: "Content Management",
      icon: BookOpen,
      path: "/teacher/content",
      badge: null
    },
    {
      title: "Assessments",
      icon: FileText,
      path: "/teacher/assessments",
      badge: "5 pending"
    },
    {
      title: "Communications",
      icon: MessageSquare,
      path: "/teacher/communications",
      badge: "2 new"
    },
    {
      title: "Analytics",
      icon: TrendingUp,
      path: "/teacher/analytics",
      badge: null
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Saksham</h2>
            <p className="text-sm text-muted-foreground">Teacher Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <NavLink key={item.path} to={item.path}>
              <Button
                variant={active ? "secondary" : "ghost"}
                className={`w-full justify-start h-12 ${
                  active 
                    ? "bg-teacher/10 text-teacher border-teacher/30 hover:bg-teacher/20" 
                    : "hover:bg-muted/50"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            </NavLink>
          );
        })}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t">
        <div className="bg-muted/30 rounded-lg p-4">
          <h3 className="font-medium text-sm mb-3">Quick Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Students</span>
              <span className="font-medium">147</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Active Courses</span>
              <span className="font-medium">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Avg. Performance</span>
              <span className="font-medium text-success">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSidebar;