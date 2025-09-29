import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Keyboard, 
  Mouse, 
  Shield, 
  Globe, 
  Mail,
  Play,
  CheckCircle2,
  Lock,
  Clock,
  Star,
  Award,
  AlertTriangle
} from "lucide-react";

const DigitalLiteracy = () => {
  const [selectedModule, setSelectedModule] = useState("basics");

  const modules = [
    {
      id: "basics",
      title: "Computer Basics",
      icon: Monitor,
      progress: 90,
      lessons: 8,
      completed: 7,
      description: "Learn fundamental computer operations"
    },
    {
      id: "typing",
      title: "Typing Skills",
      icon: Keyboard,
      progress: 65,
      lessons: 6,
      completed: 4,
      description: "Improve your typing speed and accuracy"
    },
    {
      id: "internet",
      title: "Internet Basics",
      icon: Globe,
      progress: 45,
      lessons: 10,
      completed: 4,
      description: "Navigate the internet safely and effectively"
    },
    {
      id: "safety",
      title: "Digital Safety",
      icon: Shield,
      progress: 30,
      lessons: 8,
      completed: 2,
      description: "Stay safe online and protect your privacy"
    }
  ];

  const computerBasicsLessons = [
    {
      id: 1,
      title: "What is a Computer?",
      duration: "10 mins",
      status: "completed",
      type: "video",
      xp: 50,
      description: "Introduction to computers and their uses"
    },
    {
      id: 2,
      title: "Computer Parts",
      duration: "15 mins",
      status: "completed",
      type: "interactive",
      xp: 75,
      description: "Learn about different parts of a computer"
    },
    {
      id: 3,
      title: "Using a Mouse",
      duration: "12 mins",
      status: "completed",
      type: "practice",
      xp: 60,
      description: "Master mouse clicking, dragging, and scrolling"
    },
    {
      id: 4,
      title: "Keyboard Introduction",
      duration: "18 mins",
      status: "completed",
      type: "practice",
      xp: 80,
      description: "Learn about keyboard layout and basic typing"
    },
    {
      id: 5,
      title: "Opening and Closing Programs",
      duration: "14 mins",
      status: "completed",
      type: "interactive",
      xp: 70,
      description: "How to start and close applications"
    },
    {
      id: 6,
      title: "Creating and Saving Files",
      duration: "20 mins",
      status: "completed",
      type: "practice",
      xp: 90,
      description: "Learn to create, name, and save documents"
    },
    {
      id: 7,
      title: "Organizing Files and Folders",
      duration: "16 mins",
      status: "completed",
      type: "interactive",
      xp: 85,
      description: "Keep your computer organized with folders"
    },
    {
      id: 8,
      title: "Computer Care and Maintenance",
      duration: "22 mins",
      status: "current",
      type: "video",
      xp: 100,
      description: "How to take care of your computer"
    }
  ];

  const typingChallenges = [
    {
      level: "Beginner",
      target: "15 WPM",
      current: "12 WPM",
      accuracy: "94%",
      status: "current"
    },
    {
      level: "Intermediate",
      target: "25 WPM",
      current: "0 WPM",
      accuracy: "0%",
      status: "locked"
    },
    {
      level: "Advanced",
      target: "35 WPM",
      current: "0 WPM",
      accuracy: "0%",
      status: "locked"
    }
  ];

  const safetyTips = [
    {
      title: "Never Share Personal Information",
      description: "Don't give out your name, address, or phone number online",
      icon: AlertTriangle,
      color: "text-danger"
    },
    {
      title: "Use Strong Passwords",
      description: "Create passwords with letters, numbers, and symbols",
      icon: Shield,
      color: "text-success"
    },
    {
      title: "Be Kind Online",
      description: "Treat others with respect in all digital interactions",
      icon: Award,
      color: "text-primary"
    },
    {
      title: "Ask for Help",
      description: "Tell a trusted adult if something online makes you uncomfortable",
      icon: Star,
      color: "text-warning"
    }
  ];

  const currentModule = modules.find(m => m.id === selectedModule);
  const overallProgress = modules.reduce((acc, module) => acc + module.progress, 0) / modules.length;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return CheckCircle2;
      case "current": return Play;
      case "locked": return Lock;
      default: return Monitor;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-success";
      case "current": return "text-primary";
      case "locked": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Digital Literacy</h1>
          <p className="text-muted-foreground">
            Master essential computer and internet skills
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Badge className="bg-info/10 text-info text-sm px-3 py-1">
            {Math.round(overallProgress)}% Complete
          </Badge>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="bg-gradient-to-r from-info/5 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="w-5 h-5" />
            <span>Digital Literacy Journey</span>
          </CardTitle>
          <CardDescription>
            Your progress across all digital skills modules
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <div key={module.id} className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">{module.title}</p>
                  <p className="text-xs text-muted-foreground">{module.progress}%</p>
                </div>
              );
            })}
          </div>
          <Progress value={overallProgress} className="h-3" />
          <p className="text-sm text-muted-foreground mt-2">
            Overall Progress: {Math.round(overallProgress)}%
          </p>
        </CardContent>
      </Card>

      {/* Module Selector */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Card 
              key={module.id}
              className={`cursor-pointer transition-all hover:shadow-medium ${
                selectedModule === module.id 
                  ? "border-primary shadow-medium bg-primary/5" 
                  : "hover:border-primary/50"
              }`}
              onClick={() => setSelectedModule(module.id)}
            >
              <CardContent className="pt-6">
                <div className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                  <Progress value={module.progress} className="mb-2" />
                  <p className="text-xs text-muted-foreground">
                    {module.completed}/{module.lessons} lessons
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selectedModule === "basics" && (
        <Card>
          <CardHeader>
            <CardTitle>Computer Basics Lessons</CardTitle>
            <CardDescription>
              Learn fundamental computer operations step by step
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {computerBasicsLessons.map((lesson, index) => {
                const StatusIcon = getStatusIcon(lesson.status);
                return (
                  <div 
                    key={lesson.id}
                    className={`flex items-center space-x-4 p-4 border rounded-lg ${
                      lesson.status === "current" ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      lesson.status === "completed" 
                        ? "bg-success text-white" 
                        : lesson.status === "current"
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {lesson.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold">{lesson.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{lesson.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {lesson.duration}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          {lesson.xp} XP
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {lesson.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <StatusIcon className={`w-5 h-5 ${getStatusColor(lesson.status)}`} />
                      {lesson.status === "current" && (
                        <Button className="btn-primary">
                          <Play className="w-4 h-4 mr-2" />
                          Start
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {selectedModule === "typing" && (
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Typing Practice</CardTitle>
              <CardDescription>
                Improve your typing speed and accuracy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {typingChallenges.map((challenge, index) => (
                  <div 
                    key={index}
                    className={`p-4 border rounded-lg ${
                      challenge.status === "current" ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{challenge.level}</h3>
                      <Badge 
                        variant={challenge.status === "current" ? "default" : "secondary"}
                        className={challenge.status === "locked" ? "bg-muted" : ""}
                      >
                        {challenge.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Target Speed</p>
                        <p className="font-medium">{challenge.target}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Current Speed</p>
                        <p className="font-medium">{challenge.current}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Accuracy</span>
                        <span>{challenge.accuracy}</span>
                      </div>
                      <Progress value={parseInt(challenge.accuracy)} className="h-2" />
                    </div>
                    {challenge.status === "current" && (
                      <Button className="w-full mt-3 btn-primary">
                        <Keyboard className="w-4 h-4 mr-2" />
                        Practice Now
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Typing Games</CardTitle>
              <CardDescription>
                Fun games to practice your typing skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg hover:bg-muted/30 cursor-pointer">
                  <h3 className="font-semibold mb-2">🏎️ Speed Racer</h3>
                  <p className="text-sm text-muted-foreground">Type words quickly to make your car go faster!</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/30 cursor-pointer">
                  <h3 className="font-semibold mb-2">🎯 Word Target</h3>
                  <p className="text-sm text-muted-foreground">Hit targets by typing the words correctly</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/30 cursor-pointer">
                  <h3 className="font-semibold mb-2">🌟 Letter Stars</h3>
                  <p className="text-sm text-muted-foreground">Collect stars by typing letters accurately</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedModule === "safety" && (
        <Card>
          <CardHeader>
            <CardTitle>Digital Safety Tips</CardTitle>
            <CardDescription>
              Learn how to stay safe and secure online
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {safetyTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Icon className={`w-6 h-6 ${tip.color} mt-1`} />
                    <div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DigitalLiteracy;