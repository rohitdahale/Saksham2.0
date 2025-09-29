import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Star,
  BookOpen,
  Video,
  FileText,
  Headphones,
  Award
} from "lucide-react";

const LearningPath = () => {
  const [selectedSubject, setSelectedSubject] = useState("mathematics");

  const subjects = [
    { id: "mathematics", name: "Mathematics", icon: "🔢", progress: 75 },
    { id: "science", name: "Science", icon: "🔬", progress: 60 },
    { id: "english", name: "English", icon: "📚", progress: 85 },
    { id: "hindi", name: "Hindi", icon: "🇮🇳", progress: 70 }
  ];

  const mathLessons = [
    {
      id: 1,
      title: "Introduction to Numbers",
      type: "video",
      duration: "15 mins",
      status: "completed",
      xp: 100,
      description: "Learn about different types of numbers"
    },
    {
      id: 2,
      title: "Basic Addition",
      type: "interactive",
      duration: "20 mins",
      status: "completed",
      xp: 120,
      description: "Practice adding single and double digit numbers"
    },
    {
      id: 3,
      title: "Basic Subtraction",
      type: "video",
      duration: "18 mins",
      status: "completed",
      xp: 110,
      description: "Learn subtraction with fun examples"
    },
    {
      id: 4,
      title: "Introduction to Fractions",
      type: "interactive",
      duration: "25 mins",
      status: "current",
      xp: 150,
      description: "Understanding parts of a whole"
    },
    {
      id: 5,
      title: "Fraction Addition",
      type: "quiz",
      duration: "30 mins",
      status: "locked",
      xp: 180,
      description: "Adding fractions with same and different denominators"
    },
    {
      id: 6,
      title: "Multiplication Basics",
      type: "video",
      duration: "22 mins",
      status: "locked",
      xp: 140,
      description: "Introduction to multiplication tables"
    },
    {
      id: 7,
      title: "Division Fundamentals",
      type: "interactive",
      duration: "28 mins",
      status: "locked",
      xp: 160,
      description: "Learn division with visual aids"
    },
    {
      id: 8,
      title: "Problem Solving",
      type: "assessment",
      duration: "35 mins",
      status: "locked",
      xp: 200,
      description: "Apply math skills to real-world problems"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "interactive": return Play;
      case "quiz": return FileText;
      case "assessment": return Award;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "text-blue-600 bg-blue-100";
      case "interactive": return "text-green-600 bg-green-100";
      case "quiz": return "text-purple-600 bg-purple-100";
      case "assessment": return "text-orange-600 bg-orange-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return CheckCircle2;
      case "current": return Play;
      case "locked": return Lock;
      default: return BookOpen;
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

  const currentSubject = subjects.find(s => s.id === selectedSubject);
  const completedLessons = mathLessons.filter(l => l.status === "completed").length;
  const totalLessons = mathLessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Learning Path</h1>
          <p className="text-muted-foreground">
            Follow your personalized learning journey
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Badge className="bg-student/10 text-student text-sm px-3 py-1">
            Level 5 Student
          </Badge>
        </div>
      </div>

      {/* Subject Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {subjects.map((subject) => (
          <Card 
            key={subject.id}
            className={`cursor-pointer transition-all hover:shadow-medium ${
              selectedSubject === subject.id 
                ? "border-student shadow-medium bg-student/5" 
                : "hover:border-student/50"
            }`}
            onClick={() => setSelectedSubject(subject.id)}
          >
            <CardContent className="pt-6 text-center">
              <div className="text-3xl mb-2">{subject.icon}</div>
              <h3 className="font-semibold mb-2">{subject.name}</h3>
              <Progress value={subject.progress} className="mb-2" />
              <p className="text-sm text-muted-foreground">{subject.progress}% complete</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Current Subject Overview */}
      <Card className="bg-gradient-to-r from-student/5 to-student/10 border-student/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{currentSubject?.icon}</span>
              <div>
                <CardTitle className="text-xl">{currentSubject?.name} Learning Path</CardTitle>
                <CardDescription>
                  {completedLessons} of {totalLessons} lessons completed
                </CardDescription>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-student">{Math.round(progressPercentage)}%</p>
              <p className="text-sm text-muted-foreground">Complete</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Started 3 weeks ago</span>
            <span>Est. completion: 2 weeks</span>
          </div>
        </CardContent>
      </Card>

      {/* Lessons Path */}
      <Card>
        <CardHeader>
          <CardTitle>Lesson Sequence</CardTitle>
          <CardDescription>
            Follow the recommended order to maximize your learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mathLessons.map((lesson, index) => {
              const TypeIcon = getTypeIcon(lesson.type);
              const StatusIcon = getStatusIcon(lesson.status);
              const isAccessible = lesson.status !== "locked";
              
              return (
                <div 
                  key={lesson.id}
                  className={`flex items-center space-x-4 p-4 border rounded-lg transition-all ${
                    isAccessible 
                      ? "hover:shadow-soft cursor-pointer" 
                      : "opacity-60 cursor-not-allowed"
                  } ${lesson.status === "current" ? "border-student bg-student/5" : ""}`}
                >
                  {/* Lesson Number */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    lesson.status === "completed" 
                      ? "bg-success text-white" 
                      : lesson.status === "current"
                      ? "bg-student text-white"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {lesson.status === "completed" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>

                  {/* Lesson Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={`font-semibold ${!isAccessible ? "text-muted-foreground" : ""}`}>
                        {lesson.title}
                      </h3>
                      <Badge className={`text-xs ${getTypeColor(lesson.type)}`}>
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {lesson.type}
                      </Badge>
                      {lesson.status === "current" && (
                        <Badge className="bg-student/10 text-student text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className={`text-sm mb-2 ${!isAccessible ? "text-muted-foreground" : "text-muted-foreground"}`}>
                      {lesson.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {lesson.duration}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {lesson.xp} XP
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center space-x-2">
                    <StatusIcon className={`w-5 h-5 ${getStatusColor(lesson.status)}`} />
                    {lesson.status === "current" && (
                      <Button className="btn-primary">
                        <Play className="w-4 h-4 mr-2" />
                        Continue
                      </Button>
                    )}
                    {lesson.status === "completed" && (
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Learning Tips */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-xp-gold" />
            <span>Learning Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span>Complete lessons in order for best understanding</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span>Take breaks between lessons to retain information</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span>Review previous lessons if you feel confused</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span>Ask your teacher for help when needed</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningPath;