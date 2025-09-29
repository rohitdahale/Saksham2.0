import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  FileText, 
  Clock, 
  Users, 
  CheckCircle2,
  AlertCircle,
  Eye,
  Edit,
  Calendar,
  BarChart3
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Assessments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const assessments = [
    {
      id: 1,
      title: "Mathematics Unit Test - Fractions",
      subject: "Mathematics",
      grade: "Grade 5",
      type: "quiz",
      totalQuestions: 20,
      duration: 45,
      status: "active",
      responses: 42,
      totalStudents: 48,
      averageScore: 78,
      createdAt: "2024-01-20",
      dueDate: "2024-01-25",
      description: "Assessment covering basic fraction operations"
    },
    {
      id: 2,
      title: "Science Chapter 3 - Water Cycle",
      subject: "Science",
      grade: "Grade 4",
      type: "assignment",
      totalQuestions: 15,
      duration: 60,
      status: "completed",
      responses: 35,
      totalStudents: 35,
      averageScore: 85,
      createdAt: "2024-01-15",
      dueDate: "2024-01-22",
      description: "Comprehensive assessment on water cycle processes"
    },
    {
      id: 3,
      title: "Hindi Literature Quiz",
      subject: "Hindi",
      grade: "Grade 6",
      type: "quiz",
      totalQuestions: 25,
      duration: 30,
      status: "draft",
      responses: 0,
      totalStudents: 52,
      averageScore: 0,
      createdAt: "2024-01-23",
      dueDate: "2024-01-28",
      description: "Quick assessment on Hindi poetry and prose"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-info/10 text-info";
      case "completed": return "bg-success/10 text-success";
      case "draft": return "bg-warning/10 text-warning";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return Clock;
      case "completed": return CheckCircle2;
      case "draft": return Edit;
      default: return AlertCircle;
    }
  };

  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || assessment.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { label: "Total Assessments", value: "24", icon: FileText },
    { label: "Active", value: "8", icon: Clock },
    { label: "Completed", value: "16", icon: CheckCircle2 },
    { label: "Avg. Completion", value: "87%", icon: BarChart3 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Assessments</h1>
          <p className="text-muted-foreground">
            Create, manage, and analyze student assessments
          </p>
        </div>
        <Button className="btn-primary mt-4 md:mt-0">
          <Plus className="w-4 h-4 mr-2" />
          Create Assessment
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="dashboard-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Assessments</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search assessments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Assessments List */}
          <div className="space-y-4">
            {filteredAssessments.map((assessment) => {
              const StatusIcon = getStatusIcon(assessment.status);
              const completionRate = (assessment.responses / assessment.totalStudents) * 100;
              
              return (
                <Card key={assessment.id} className="dashboard-card">
                  <CardContent className="pt-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold">{assessment.title}</h3>
                              <Badge className={getStatusColor(assessment.status)}>
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {assessment.status}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">
                              {assessment.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{assessment.subject} • {assessment.grade}</span>
                              <span>{assessment.totalQuestions} questions</span>
                              <span>{assessment.duration} mins</span>
                            </div>
                          </div>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit Assessment
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <BarChart3 className="w-4 h-4 mr-2" />
                                View Results
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Responses</p>
                            <p className="font-medium">
                              {assessment.responses}/{assessment.totalStudents}
                            </p>
                          </div>
                          
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Completion Rate</p>
                            <p className="font-medium">{Math.round(completionRate)}%</p>
                          </div>
                          
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Average Score</p>
                            <p className="font-medium">
                              {assessment.averageScore > 0 ? `${assessment.averageScore}%` : 'N/A'}
                            </p>
                          </div>
                          
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Due Date</p>
                            <p className="font-medium flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(assessment.dueDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        
                        {assessment.status === "active" && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Completion Progress</span>
                              <span>{Math.round(completionRate)}%</span>
                            </div>
                            <Progress value={completionRate} className="h-2" />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create New Assessment</CardTitle>
              <CardDescription>
                Choose an assessment type to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="cursor-pointer hover:shadow-medium transition-all">
                  <CardContent className="pt-6 text-center">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Quick Quiz</h3>
                    <p className="text-sm text-muted-foreground">
                      Create a timed quiz with multiple choice questions
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-medium transition-all">
                  <CardContent className="pt-6 text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-secondary" />
                    <h3 className="font-semibold mb-2">Assignment</h3>
                    <p className="text-sm text-muted-foreground">
                      Create a comprehensive assignment with multiple question types
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-medium transition-all">
                  <CardContent className="pt-6 text-center">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4 text-warning" />
                    <h3 className="font-semibold mb-2">Diagnostic Test</h3>
                    <p className="text-sm text-muted-foreground">
                      Create an adaptive test to assess student understanding
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Results</CardTitle>
                <CardDescription>Latest assessment performances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assessments
                    .filter(a => a.status === "completed")
                    .map((assessment) => (
                      <div key={assessment.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{assessment.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {assessment.subject} • {assessment.responses} responses
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{assessment.averageScore}%</p>
                          <p className="text-sm text-muted-foreground">Average</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance Insights</CardTitle>
                <CardDescription>Analysis of student performance trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Highest Performing Subject</span>
                    <span className="font-medium">Science (85%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Most Challenging Topic</span>
                    <span className="font-medium">Fractions (78%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Completion Time</span>
                    <span className="font-medium">32 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Students Needing Support</span>
                    <span className="font-medium text-warning">12 students</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Assessments;