import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Star, Trophy, Target, Zap } from "lucide-react";

const Achievements = () => {
  const badges = [
    { title: "Math Master", icon: "🏆", rarity: "gold", earned: true, description: "Complete 10 math lessons" },
    { title: "Quick Learner", icon: "⚡", rarity: "silver", earned: true, description: "Finish lesson in under 10 minutes" },
    { title: "Perfect Score", icon: "⭐", rarity: "gold", earned: true, description: "Get 100% on quiz" },
    { title: "Study Streak", icon: "🔥", rarity: "bronze", earned: false, description: "Study for 7 days straight" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Achievements</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((badge, index) => (
          <Card key={index} className={`${badge.earned ? '' : 'opacity-50'}`}>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <h3 className="font-semibold">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
              <Badge className={`mt-2 ${badge.rarity === 'gold' ? 'bg-xp-gold/10 text-xp-gold' : ''}`}>
                {badge.rarity}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Achievements;