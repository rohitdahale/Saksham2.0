import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  Eye,
  MessageSquare
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const StudentProgress = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterClass, setFilterClass] = useState("all");
  const [filterPerformance, setFilterPerformance] = useState("all");

  const students = [
    {
      id: 1,
      name: "Rajesh Kumar",
      avatar: "",
      class: "Grade 5",
      performance: "excellent",
      overallScore: 92,
      attendance: 95,
      assignmentsCompleted: 18,
      totalAssignments: 20,
      recentActivity: "2 hours ago",
      subjects: {
        math: 94,
        science: 89,
        english: 95,
        hindi: 90
      },
      trend: "up",
      alerts: []
    },
    {
      id: 2,
      name: "Priya Sharma",
      avatar: "",
      class: "Grade 5",
      performance: "good",
      overallScore: 78,
      attendance: 88,
      assignmentsCompleted: 16,
      totalAssignments: 20,
      recentActivity: "5 hours ago",
      subjects: {
        math: 75,
        science: 82,
        english: 80,
        hindi: 75
      },
      trend: "up",
      alerts: ["Late submission in Math"]
    },
    {
      id: 3,
      name: "Arjun Singh",
      avatar: "",
      class: "Grade 4",
      performance: "needs-help",
      overallScore: 58,
      attendance: 72,
      assignmentsCompleted: 10,
      totalAssignments: 20,
      recentActivity: "1 day ago",
      subjects: {
        math: 55,
        science: 62,
        english: 58,
        hindi: 57
      },
      trend: "down",
      alerts: ["Poor attendance", "Multiple missing assignments"]
    }
  ];

  const classPerformance = [
    { week: "Week 1", average: 72 },
    { week: "Week 2", average: 75 },
    { week: "Week 3", average: 78 },
    { week: "Week 4", average: 82 },
    { week: "Week 5", average: 85 },
    { week: "Week 6", average: 87 }
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "excellent": return "performance-excellent";
      case "good": return "text-[hsl(var(--performance-good))]";
      case "average": return "text-[hsl(var(--performance-average))]";
      case "needs-help": return "performance-needs-help";
      default: return "text-muted-foreground";
    }
  };

  const getPerformanceLabel = (performance: string) => {
    switch (performance) {
      case "excellent": return "Excellent";
      case "good": return "Good";
      case "average": return "Average";
      case "needs-help": return "Needs Help";
      default: return "Unknown";
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === "all" || student.class === filterClass;
    const matchesPerformance = filterPerformance === "all" || student.performance === filterPerformance;
    
    return matchesSearch && matchesClass && matchesPerformance;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Student Progress</h1>
          <p className="text-muted-foreground">
            Monitor and track individual student performance
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filterClass} onValueChange={setFilterClass}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="Grade 4">Grade 4</SelectItem>
                <SelectItem value="Grade 5">Grade 5</SelectItem>
                <SelectItem value="Grade 6">Grade 6</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filterPerformance} onValueChange={setFilterPerformance}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by performance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Performance</SelectItem>
                <SelectItem value="excellent">Excellent</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="average">Average</SelectItem>
                <SelectItem value="needs-help">Needs Help</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Class Performance Trend */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Class Performance Trend</CardTitle>
            <CardDescription>
              Weekly average scores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={classPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="week" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="average"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Student List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="dashboard-card">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={student.avatar} />
                      <AvatarFallback className={`bg-student/10 text-student`}>
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-lg">{student.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {student.class}
                        </Badge>
                        <Badge 
                          className={`text-xs ${getPerformanceColor(student.performance)} bg-${student.performance === 'excellent' ? 'performance-excellent' : student.performance === 'needs-help' ? 'performance-needs-help' : 'muted'}/10`}
                        >
                          {getPerformanceLabel(student.performance)}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Overall Score</p>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium">{student.overallScore}%</p>
                            {student.trend === "up" ? (
                              <TrendingUp className="w-3 h-3 text-success" />
                            ) : (
                              <TrendingDown className="w-3 h-3 text-danger" />
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-xs text-muted-foreground">Attendance</p>
                          <p className="text-sm font-medium">{student.attendance}%</p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-muted-foreground">Assignments</p>
                          <p className="text-sm font-medium">
                            {student.assignmentsCompleted}/{student.totalAssignments}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-muted-foreground">Last Active</p>
                          <p className="text-sm font-medium">{student.recentActivity}</p>
                        </div>
                      </div>
                      
                      {/* Subject Progress */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {Object.entries(student.subjects).map(([subject, score]) => (
                          <div key={subject}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="capitalize text-muted-foreground">{subject}</span>
                              <span className="font-medium">{score}%</span>
                            </div>
                            <Progress value={score} className="h-1" />
                          </div>
                        ))}
                      </div>
                      
                      {/* Alerts */}
                      {student.alerts.length > 0 && (
                        <div className="space-y-1">
                          {student.alerts.map((alert, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <AlertTriangle className="w-4 h-4 text-warning" />
                              <span className="text-warning">{alert}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Send Message
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;