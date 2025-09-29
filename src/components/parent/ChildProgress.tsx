import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChildProgress = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Child Progress</h1>
      <Card>
        <CardHeader>
          <CardTitle>Academic Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your child is performing well across all subjects.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildProgress;