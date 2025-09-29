import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, ArrowLeft, LucideIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserType {
  value: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const userTypes: UserType[] = [
    { value: "teacher", label: "Teacher", icon: GraduationCap, path: "/teacher" },
    { value: "student", label: "Student", icon: BookOpen, path: "/student" },
    { value: "parent", label: "Parent", icon: Users, path: "/parent" }
  ];

  const handleDemoLogin = (type: string) => {
    const selectedUserType = userTypes.find(userType => userType.value === type);
    
    toast({
      title: "Demo Login",
      description: `Logged in as demo ${type}`
    });
    
    setTimeout(() => {
      navigate(selectedUserType?.path || "/");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            className="absolute top-4 left-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold">Saksham</h1>
              <p className="text-sm text-gray-600">Digital Learning Platform</p>
            </div>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to Demo</CardTitle>
            <CardDescription>
              Try out the platform with demo accounts
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600">
                Choose your role to explore the platform features
              </p>
            </div>
            
            <div className="space-y-3">
              {userTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Button
                    key={type.value}
                    variant="outline"
                    className="w-full justify-start h-16 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all"
                    onClick={() => handleDemoLogin(type.value)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-base">Demo {type.label}</div>
                      <div className="text-xs text-gray-600">
                        Explore {type.label.toLowerCase()} features
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            This is a demonstration version of the platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;