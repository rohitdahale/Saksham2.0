import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Clock,
  AlertCircle,
  CheckCircle2,
  Plus,
  Calendar
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

const TeacherOverview = () => {
  const stats = [
    {
      title: "Total Students",
      value: "147",
      change: "+12 this month",
      icon: Users,
      color: "text-student",
      bgColor: "bg-student/10"
    },
    {
      title: "Active Courses",
      value: "8",
      change: "2 new this week",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "Need attention",
      icon: FileText,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      title: "Avg Performance",
      value: "85%",
      change: "+5% from last month",
      icon: TrendingUp,
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const weeklyEngagement = [
    { day: "Mon", students: 120, completed: 89 },
    { day: "Tue", students: 135, completed: 95 },
    { day: "Wed", students: 142, completed: 110 },
    { day: "Thu", students: 138, completed: 98 },
    { day: "Fri", students: 145, completed: 125 },
    { day: "Sat", students: 98, completed: 78 },
    { day: "Sun", students: 87, completed: 65 }
  ];

  const recentActivities = [
    {
      type: "assessment",
      title: "Math Quiz Grade 5 - Results Available",
      time: "2 hours ago",
      status: "completed",
      icon: CheckCircle2,
      color: "text-success"
    },
    {
      type: "alert",
      title: "3 students need attention in Science",
      time: "4 hours ago",
      status: "pending",
      icon: AlertCircle,
      color: "text-warning"
    },
    {
      type: "content",
      title: "New content uploaded: Hindi Literature",
      time: "6 hours ago",
      status: "completed",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      type: "communication",
      title: "Parent meeting requests (5 pending)",
      time: "8 hours ago",
      status: "pending",
      icon: Users,
      color: "text-info"
    }
  ];

  const upcomingTasks = [
    {
      title: "Grade Math Assignments",
      dueDate: "Today, 3:00 PM",
      priority: "high",
      progress: 60
    },
    {
      title: "Prepare Science Quiz",
      dueDate: "Tomorrow, 9:00 AM",
      priority: "medium",
      progress: 30
    },
    {
      title: "Parent-Teacher Meeting",
      dueDate: "Friday, 2:00 PM",
      priority: "high",
      progress: 90
    },
    {
      title: "Update Course Materials",
      dueDate: "Next Week",
      priority: "low",
      progress: 15
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Good morning, Teacher!</h1>
          <p className="text-muted-foreground">
            Here's what's happening in your classroom today
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="dashboard-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weekly Engagement Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Student Engagement</CardTitle>
            <CardDescription>
              Daily active students and completed assignments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyEngagement}>
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
                  <Area
                    type="monotone"
                    dataKey="students"
                    stackId="1"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                    name="Active Students"
                  />
                  <Area
                    type="monotone"
                    dataKey="completed"
                    stackId="2"
                    stroke="hsl(var(--success))"
                    fill="hsl(var(--success))"
                    fillOpacity={0.6}
                    name="Completed Tasks"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates from your classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-1 rounded-full ${activity.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {activity.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                    {activity.status === "pending" && (
                      <Badge variant="outline" className="text-xs">
                        Pending
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tasks</CardTitle>
          <CardDescription>
            Track your pending tasks and deadlines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{task.title}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {task.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {task.dueDate}
                    </div>
                    <Progress value={task.progress} className="w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherOverview;