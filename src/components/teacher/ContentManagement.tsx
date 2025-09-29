import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  Upload, 
  FileText, 
  Video, 
  Image, 
  Music,
  Download,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const ContentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const content = [
    {
      id: 1,
      title: "Introduction to Fractions",
      subject: "Mathematics",
      type: "video",
      duration: "15 mins",
      size: "45 MB",
      grade: "Grade 5",
      language: "English",
      views: 142,
      downloads: 89,
      status: "published",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-20",
      description: "Basic concepts of fractions with visual examples"
    },
    {
      id: 2,
      title: "Water Cycle Diagram",
      subject: "Science",
      type: "image",
      duration: null,
      size: "2.3 MB",
      grade: "Grade 4",
      language: "Hindi",
      views: 98,
      downloads: 65,
      status: "published",
      createdAt: "2024-01-12",
      updatedAt: "2024-01-12",
      description: "Detailed water cycle process illustration"
    },
    {
      id: 3,
      title: "Punjabi Alphabet Song",
      subject: "Language",
      type: "audio",
      duration: "8 mins",
      size: "12 MB",
      grade: "Grade 1",
      language: "Punjabi",
      views: 203,
      downloads: 156,
      status: "published",
      createdAt: "2024-01-10",
      updatedAt: "2024-01-18",
      description: "Interactive song for learning Punjabi alphabet"
    },
    {
      id: 4,
      title: "History of India - Chapter 3",
      subject: "History",
      type: "document",
      duration: null,
      size: "8.7 MB",
      grade: "Grade 6",
      language: "English",
      views: 67,
      downloads: 34,
      status: "draft",
      createdAt: "2024-01-22",
      updatedAt: "2024-01-22",
      description: "Comprehensive guide covering medieval India"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "image": return Image;
      case "audio": return Music;
      case "document": return FileText;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "text-blue-600 bg-blue-100";
      case "image": return "text-green-600 bg-green-100";
      case "audio": return "text-purple-600 bg-purple-100";
      case "document": return "text-orange-600 bg-orange-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === "all" || item.subject === filterSubject;
    const matchesType = filterType === "all" || item.type === filterType;
    
    return matchesSearch && matchesSubject && matchesType;
  });

  const stats = [
    { label: "Total Content", value: "156", icon: FileText },
    { label: "Published", value: "134", icon: CheckCircle2 },
    { label: "Drafts", value: "22", icon: Edit },
    { label: "Total Views", value: "12.4K", icon: Eye }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Content Management</h1>
          <p className="text-muted-foreground">
            Create, organize, and manage your educational content
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Bulk Upload
          </Button>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </Button>
        </div>
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

      <Tabs defaultValue="library" className="space-y-6">
        <TabsList>
          <TabsTrigger value="library">Content Library</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={filterSubject} onValueChange={setFilterSubject}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="Language">Language</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="video">Videos</SelectItem>
                    <SelectItem value="image">Images</SelectItem>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="document">Documents</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredContent.map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <Card key={item.id} className="dashboard-card group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                        <TypeIcon className="w-5 h-5" />
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div>
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="outline">{item.subject}</Badge>
                        <Badge 
                          variant={item.status === "published" ? "default" : "secondary"}
                          className={item.status === "published" ? "bg-success/10 text-success" : ""}
                        >
                          {item.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>
                          <p>Grade: {item.grade}</p>
                          <p>Language: {item.language}</p>
                        </div>
                        <div>
                          <p>Size: {item.size}</p>
                          {item.duration && <p>Duration: {item.duration}</p>}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {item.views}
                          </span>
                          <span className="flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            {item.downloads}
                          </span>
                        </div>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(item.updatedAt).toLocaleDateString()}
                        </span>
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
              <CardTitle>Create New Content</CardTitle>
              <CardDescription>
                Choose a content type to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { type: "video", label: "Video Lesson", icon: Video, description: "Create interactive video content" },
                  { type: "image", label: "Visual Aid", icon: Image, description: "Upload educational images and diagrams" },
                  { type: "audio", label: "Audio Content", icon: Music, description: "Record or upload audio lessons" },
                  { type: "document", label: "Document", icon: FileText, description: "Create text-based learning materials" }
                ].map((contentType) => {
                  const Icon = contentType.icon;
                  return (
                    <Card key={contentType.type} className="cursor-pointer hover:shadow-medium transition-all">
                      <CardContent className="pt-6 text-center">
                        <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h3 className="font-semibold mb-2">{contentType.label}</h3>
                        <p className="text-sm text-muted-foreground">{contentType.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Content</CardTitle>
                <CardDescription>Most viewed content this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {content.slice(0, 3).map((item, index) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          {index + 1}
                        </Badge>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.views} views</p>
                        <p className="text-sm text-muted-foreground">{item.downloads} downloads</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Engagement metrics overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Average Views per Content</span>
                    <span className="font-medium">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Downloads per Content</span>
                    <span className="font-medium">86</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Most Popular Subject</span>
                    <span className="font-medium">Mathematics</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Most Popular Grade</span>
                    <span className="font-medium">Grade 5</span>
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

export default ContentManagement;