import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { TrendingUp, BookOpen, Clock, Target } from "lucide-react";

const Progress = () => {
  const subjects = [
    { name: "Mathematics", progress: 85, grade: "A-" },
    { name: "Science", progress: 72, grade: "B+" },
    { name: "English", progress: 91, grade: "A" },
    { name: "Hindi", progress: 78, grade: "B+" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Progress</h1>
      
      <div className="grid gap-4">
        {subjects.map((subject, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{subject.name}</span>
                <span className="text-lg font-bold">{subject.grade}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span>Progress</span>
                <span>{subject.progress}%</span>
              </div>
              <ProgressBar value={subject.progress} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Progress;