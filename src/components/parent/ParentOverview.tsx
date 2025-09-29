import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Award, TrendingUp } from "lucide-react";

const ParentOverview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Parent Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-sm">Study Time</span>
              <Clock className="w-4 h-4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 hrs</div>
            <p className="text-sm text-muted-foreground">Today</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentOverview;