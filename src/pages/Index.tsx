import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Users, BookOpen, Globe, Zap, Award, ChevronRight, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface UserType {
  type: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  path: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>("en");

  const features: Feature[] = [
    {
      icon: BookOpen,
      title: "Smart Learning",
      description: "Adaptive content based on student performance"
    },
    {
      icon: Users,
      title: "Multi-Dashboard",
      description: "Separate interfaces for teachers, students, and parents"
    },
    {
      icon: Globe,
      title: "Multilingual",
      description: "Support for Punjabi, Hindi, and English"
    },
    {
      icon: Zap,
      title: "Offline-First",
      description: "Works seamlessly without internet connection"
    },
    {
      icon: Award,
      title: "Gamification",
      description: "XP, badges, and achievements to motivate learning"
    },
    {
      icon: GraduationCap,
      title: "Performance Analytics",
      description: "Detailed insights into learning progress"
    }
  ];

  const userTypes: UserType[] = [
    {
      type: "teacher",
      title: "Teacher Portal",
      description: "Manage classes, create content, track student progress",
      icon: GraduationCap,
      color: "bg-gradient-to-br from-blue-500/10 to-blue-500/20 border-blue-500/30",
      path: "/teacher"
    },
    {
      type: "student",
      title: "Student Portal",
      description: "Access lessons, complete assignments, track progress",
      icon: BookOpen,
      color: "bg-gradient-to-br from-green-500/10 to-green-500/20 border-green-500/30",
      path: "/student"
    },
    {
      type: "parent",
      title: "Parent Portal",
      description: "Monitor child's progress, communicate with teachers",
      icon: Users,
      color: "bg-gradient-to-br from-purple-500/10 to-purple-500/20 border-purple-500/30",
      path: "/parent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Saksham</h1>
              <p className="text-sm text-gray-600">Digital Learning Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
                <SelectItem value="pa">ਪੰਜਾਬੀ</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Rural Education with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Learning
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A comprehensive digital learning platform designed for rural schools, 
              featuring offline-first architecture and multilingual support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6"
                onClick={() => navigate("/login")}
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Portal</h2>
            <p className="text-gray-600">Access the platform based on your role</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {userTypes.map((userType) => {
              const Icon = userType.icon;
              return (
                <Card 
                  key={userType.type}
                  className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 ${userType.color}`}
                  onClick={() => navigate(userType.path)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{userType.title}</CardTitle>
                    <CardDescription>{userType.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button className="w-full" variant="outline">
                      Access Portal
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-gray-600">Comprehensive tools for modern rural education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all hover:border-blue-300 border-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 transition-all">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-white/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">Saksham Digital Learning Platform</span>
            </div>
            <p className="text-sm text-gray-600">
              Smart India Hackathon 2025 • Empowering Rural Education
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;