import { NavLink, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Monitor,
  Home,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const StudentSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/student/overview",
      badge: null
    },
    {
      title: "Learning Path",
      icon: BookOpen,
      path: "/student/learning",
      badge: "3 new"
    },
    {
      title: "Digital Literacy",
      icon: Monitor,
      path: "/student/digital-literacy",
      badge: null
    },
    {
      title: "Achievements",
      icon: Award,
      path: "/student/achievements",
      badge: "1 new"
    },
    {
      title: "Progress",
      icon: TrendingUp,
      path: "/student/progress",
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
            <p className="text-sm text-muted-foreground">Student Portal</p>
          </div>
        </div>
      </div>

      {/* Student Info */}
      <div className="p-4 border-b">
        <div className="text-center">
          <div className="w-16 h-16 bg-student/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-student">A</span>
          </div>
          <h3 className="font-semibold">Arjun Singh</h3>
          <p className="text-sm text-muted-foreground">Grade 5 • Student ID: S12345</p>
          
          {/* XP Progress */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Level 5</span>
              <span>2,340 XP</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">160 XP to Level 6</p>
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
                    ? "bg-student/10 text-student border-student/30 hover:bg-student/20" 
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

      {/* Today's Goal */}
      <div className="p-4 border-t">
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Star className="w-4 h-4 text-xp-gold" />
            <h3 className="font-medium text-sm">Today's Goal</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Complete 3 lessons</p>
          <Progress value={67} className="h-2 mb-2" />
          <p className="text-xs text-muted-foreground">2 of 3 completed</p>
        </div>
      </div>
    </div>
  );
};

export default StudentSidebar;