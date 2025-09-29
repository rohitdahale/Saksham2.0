import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Communication = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Communication</h1>
      <Card>
        <CardHeader>
          <CardTitle>Messages from Teachers</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No new messages.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Communication;