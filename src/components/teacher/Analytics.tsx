import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Clock,
  Target,
  Award,
  AlertTriangle,
  Download,
  Filter
} from "lucide-react";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar
} from "recharts";

const Analytics = () => {
  const performanceData = [
    { month: "Aug", math: 78, science: 82, english: 75, hindi: 80 },
    { month: "Sep", math: 82, science: 85, english: 78, hindi: 83 },
    { month: "Oct", math: 85, science: 87, english: 82, hindi: 85 },
    { month: "Nov", math: 88, science: 89, english: 85, hindi: 87 },
    { month: "Dec", math: 90, science: 91, english: 88, hindi: 89 },
    { month: "Jan", math: 92, science: 93, english: 90, hindi: 91 }
  ];

  const attendanceData = [
    { day: "Mon", present: 45, absent: 3 },
    { day: "Tue", present: 46, absent: 2 },
    { day: "Wed", present: 44, absent: 4 },
    { day: "Thu", present: 47, absent: 1 },
    { day: "Fri", present: 43, absent: 5 }
  ];

  const subjectPerformance = [
    { subject: "Math", score: 92, color: "#3b82f6" },
    { subject: "Science", score: 89, color: "#10b981" },
    { subject: "English", score: 85, color: "#f59e0b" },
    { subject: "Hindi", score: 87, color: "#8b5cf6" }
  ];

  const studentEngagement = [
    { level: "High", value: 65, color: "#10b981" },
    { level: "Medium", value: 25, color: "#f59e0b" },
    { level: "Low", value: 10, color: "#ef4444" }
  ];

  const learningProgress = [
    { category: "Completed", value: 75, color: "#10b981" },
    { category: "In Progress", value: 20, color: "#f59e0b" },
    { category: "Not Started", value: 5, color: "#ef4444" }
  ];

  const keyMetrics = [
    {
      title: "Class Average",
      value: "88.5%",
      change: "+3.2%",
      trend: "up",
      icon: Target,
      color: "text-success"
    },
    {
      title: "Attendance Rate",
      value: "94.2%",
      change: "+1.8%",
      trend: "up",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Assignment Completion",
      value: "91.7%",
      change: "-2.1%",
      trend: "down",
      icon: BookOpen,
      color: "text-warning"
    },
    {
      title: "Avg Study Time",
      value: "2.4 hrs",
      change: "+0.3 hrs",
      trend: "up",
      icon: Clock,
      color: "text-info"
    }
  ];

  const topPerformers = [
    { name: "Rajesh Kumar", score: 95, improvement: "+5%" },
    { name: "Priya Sharma", score: 93, improvement: "+3%" },
    { name: "Amit Singh", score: 91, improvement: "+7%" },
    { name: "Neha Patel", score: 89, improvement: "+2%" }
  ];

  const needsAttention = [
    { name: "Arjun Singh", score: 58, issue: "Low attendance" },
    { name: "Kavya Reddy", score: 62, issue: "Math difficulties" },
    { name: "Rohit Gupta", score: 65, issue: "Assignment delays" }
  ];

  const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into class performance and learning trends
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <Select defaultValue="current-month">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-week">This Week</SelectItem>
              <SelectItem value="current-month">This Month</SelectItem>
              <SelectItem value="current-quarter">This Quarter</SelectItem>
              <SelectItem value="current-year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card key={index} className="dashboard-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                  <TrendIcon className={`w-4 h-4 ${metric.trend === "up" ? "text-success" : "text-danger"}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className={`text-xs ${metric.trend === "up" ? "text-success" : "text-danger"}`}>
                    {metric.change} from last period
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Subject Performance Trends</CardTitle>
            <CardDescription>
              Monthly average scores across all subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
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
                  <Line type="monotone" dataKey="math" stroke="#3b82f6" strokeWidth={2} name="Math" />
                  <Line type="monotone" dataKey="science" stroke="#10b981" strokeWidth={2} name="Science" />
                  <Line type="monotone" dataKey="english" stroke="#f59e0b" strokeWidth={2} name="English" />
                  <Line type="monotone" dataKey="hindi" stroke="#8b5cf6" strokeWidth={2} name="Hindi" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weekly Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Attendance</CardTitle>
            <CardDescription>Daily attendance patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="day" 
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
                  <Bar dataKey="present" fill="#10b981" name="Present" />
                  <Bar dataKey="absent" fill="#ef4444" name="Absent" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Student Engagement */}
        <Card>
          <CardHeader>
            <CardTitle>Student Engagement</CardTitle>
            <CardDescription>Distribution of engagement levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={studentEngagement}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ level, value }) => `${level}: ${value}%`}
                  >
                    {studentEngagement.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>Overall assignment completion status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {learningProgress.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.category}</span>
                    <span className="text-sm text-muted-foreground">{item.value}%</span>
                  </div>
                  <Progress value={item.value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Students with highest scores this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-success/10 text-success">
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">Score: {student.score}%</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success">{student.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Students Needing Attention */}
        <Card>
          <CardHeader>
            <CardTitle>Needs Attention</CardTitle>
            <CardDescription>Students requiring additional support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {needsAttention.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-warning/5">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">Score: {student.score}%</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-warning border-warning">
                    {student.issue}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance Detail */}
      <Card>
        <CardHeader>
          <CardTitle>Subject Performance Breakdown</CardTitle>
          <CardDescription>Detailed analysis by subject area</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjectPerformance.map((subject, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={[subject]}>
                      <RadialBar
                        dataKey="score"
                        cornerRadius={10}
                        fill={subject.color}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <h3 className="font-semibold">{subject.subject}</h3>
                <p className="text-2xl font-bold" style={{ color: subject.color }}>
                  {subject.score}%
                </p>
                <p className="text-sm text-muted-foreground">Class Average</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;