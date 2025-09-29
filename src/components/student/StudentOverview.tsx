import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Award, 
  Clock, 
  Target,
  TrendingUp,
  Play,
  CheckCircle2,
  Star,
  Zap,
  Calendar
} from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const StudentOverview = () => {
  const stats = [
    {
      title: "Lessons Completed",
      value: "24",
      total: "30",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Current XP",
      value: "2,340",
      change: "+120 today",
      icon: Zap,
      color: "text-xp-gold",
      bgColor: "bg-xp-gold/10"
    },
    {
      title: "Badges Earned",
      value: "12",
      change: "1 new",
      icon: Award,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Study Streak",
      value: "7 days",
      change: "Best: 12 days",
      icon: Target,
      color: "text-student",
      bgColor: "bg-student/10"
    }
  ];

  const progressData = [
    { week: "Week 1", score: 65 },
    { week: "Week 2", score: 72 },
    { week: "Week 3", score: 78 },
    { week: "Week 4", score: 85 },
    { week: "Week 5", score: 82 },
    { week: "Week 6", score: 89 }
  ];

  const subjects = [
    {
      name: "Mathematics",
      progress: 85,
      nextLesson: "Multiplication Tables",
      timeToComplete: "15 mins",
      icon: "🔢"
    },
    {
      name: "Science",
      progress: 72,
      nextLesson: "Solar System",
      timeToComplete: "20 mins",
      icon: "🔬"
    },
    {
      name: "English",
      progress: 91,
      nextLesson: "Reading Comprehension",
      timeToComplete: "12 mins",
      icon: "📚"
    },
    {
      name: "Hindi",
      progress: 78,
      nextLesson: "Grammar Basics",
      timeToComplete: "18 mins",
      icon: "🇮🇳"
    }
  ];

  const recentAchievements = [
    {
      title: "Math Master",
      description: "Completed 10 math lessons in a row",
      earned: "2 hours ago",
      icon: "🏆",
      rarity: "gold"
    },
    {
      title: "Quick Learner",
      description: "Finished lesson in under 10 minutes",
      earned: "Yesterday",
      icon: "⚡",
      rarity: "silver"
    },
    {
      title: "Perfect Score",
      description: "Got 100% on Science quiz",
      earned: "2 days ago",
      icon: "⭐",
      rarity: "gold"
    }
  ];

  const upcomingTasks = [
    {
      subject: "Mathematics",
      task: "Complete Fraction Worksheet",
      dueDate: "Today, 6:00 PM",
      priority: "high"
    },
    {
      subject: "Science",
      task: "Watch Water Cycle Video",
      dueDate: "Tomorrow",
      priority: "medium"
    },
    {
      subject: "English",
      task: "Read Chapter 5",
      dueDate: "Friday",
      priority: "low"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "gold": return "text-xp-gold";
      case "silver": return "text-xp-silver";
      case "bronze": return "text-xp-bronze";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Arjun! 🌟</h1>
          <p className="text-muted-foreground">
            You're doing great! Keep up the excellent work.
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <Button className="btn-primary">
            <Play className="w-4 h-4 mr-2" />
            Continue Learning
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            My Schedule
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                <div className="text-2xl font-bold mb-1">
                  {stat.value}
                  {stat.total && (
                    <span className="text-sm text-muted-foreground">/{stat.total}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {stat.change || "Keep it up!"}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Your Learning Progress</CardTitle>
            <CardDescription>
              Weekly performance across all subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData}>
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
                    dataKey="score"
                    stroke="hsl(var(--student))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--student))", strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Your latest badges and rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <Badge className={`text-xs ${getRarityColor(achievement.rarity)} bg-${achievement.rarity === 'gold' ? 'xp-gold' : achievement.rarity === 'silver' ? 'xp-silver' : 'xp-bronze'}/10`}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-muted-foreground">{achievement.earned}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Subject Progress</CardTitle>
          <CardDescription>
            Continue your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="learning-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{subject.icon}</span>
                    <div>
                      <h3 className="font-semibold">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">{subject.progress}% complete</p>
                    </div>
                  </div>
                  <Button size="sm" className="btn-primary">
                    <Play className="w-3 h-3 mr-1" />
                    Start
                  </Button>
                </div>
                
                <Progress value={subject.progress} className="mb-3" />
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Next: {subject.nextLesson}</span>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {subject.timeToComplete}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tasks</CardTitle>
          <CardDescription>
            Don't forget to complete these assignments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">{task.task}</p>
                    <p className="text-xs text-muted-foreground">{task.subject}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {task.priority}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentOverview;