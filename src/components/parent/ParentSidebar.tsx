import { NavLink, useLocation } from "react-router-dom";
import { GraduationCap, Users, MessageSquare, FileText, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const ParentSidebar = () => {
  const location = useLocation();
  const menuItems = [
    { title: "Overview", icon: Home, path: "/parent/overview" },
    { title: "Child Progress", icon: Users, path: "/parent/progress" },
    { title: "Communication", icon: MessageSquare, path: "/parent/communication" },
    { title: "Reports", icon: FileText, path: "/parent/reports" }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Saksham</h2>
            <p className="text-sm text-muted-foreground">Parent Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;
          return (
            <NavLink key={item.path} to={item.path}>
              <Button variant={active ? "secondary" : "ghost"} className="w-full justify-start">
                <Icon className="w-5 h-5 mr-3" />
                {item.title}
              </Button>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default ParentSidebar;