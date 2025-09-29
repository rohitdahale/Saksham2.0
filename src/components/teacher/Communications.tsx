import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Send, 
  Search, 
  MessageSquare, 
  Users, 
  Phone,
  Mail,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  Filter
} from "lucide-react";

const Communications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [messageText, setMessageText] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");

  const messages = [
    {
      id: 1,
      from: "Mrs. Sharma (Parent)",
      to: "You",
      subject: "Question about Math homework",
      message: "Hi, my child is having difficulty with the fraction problems. Could you provide some additional guidance?",
      timestamp: "2 hours ago",
      type: "question",
      status: "unread",
      avatar: ""
    },
    {
      id: 2,
      from: "Mr. Patel (Parent)", 
      to: "You",
      subject: "Parent-Teacher Meeting Request",
      message: "I would like to schedule a meeting to discuss my daughter's progress in Science.",
      timestamp: "5 hours ago",
      type: "meeting",
      status: "read",
      avatar: ""
    },
    {
      id: 3,
      from: "You",
      to: "Grade 5 Parents",
      subject: "Math Test Results Available",
      message: "The results for the recent math test are now available. Overall class performance was excellent!",
      timestamp: "1 day ago",
      type: "announcement",
      status: "sent",
      avatar: ""
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "School Holiday Notice",
      content: "School will be closed next Friday for Guru Nanak Jayanti celebration.",
      recipients: "All Students & Parents",
      timestamp: "3 hours ago",
      views: 145,
      responses: 8
    },
    {
      id: 2,
      title: "Science Fair Preparation",
      content: "Reminder: Science fair projects are due next week. Please ensure your child has completed their experiments.",
      recipients: "Grade 5 Parents",
      timestamp: "1 day ago",
      views: 89,
      responses: 12
    }
  ];

  const contacts = [
    {
      id: 1,
      name: "Grade 5 Students",
      type: "group",
      count: 48,
      avatar: "",
      lastActive: "Online"
    },
    {
      id: 2,
      name: "Grade 5 Parents",
      type: "group", 
      count: 48,
      avatar: "",
      lastActive: "Recent"
    },
    {
      id: 3,
      name: "Mrs. Sharma",
      type: "parent",
      count: 1,
      avatar: "",
      lastActive: "2 hours ago"
    },
    {
      id: 4,
      name: "Mr. Patel",
      type: "parent",
      count: 1,
      avatar: "",
      lastActive: "5 hours ago"
    }
  ];

  const getMessageIcon = (type: string) => {
    switch (type) {
      case "question": return AlertCircle;
      case "meeting": return Calendar;
      case "announcement": return MessageSquare;
      default: return MessageSquare;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread": return "bg-info/10 text-info";
      case "read": return "bg-muted text-muted-foreground";
      case "sent": return "bg-success/10 text-success";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const stats = [
    { label: "Unread Messages", value: "12", icon: MessageSquare },
    { label: "Parent Responses", value: "8", icon: Users },
    { label: "Meeting Requests", value: "3", icon: Calendar },
    { label: "Announcements Sent", value: "24", icon: Send }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Communications</h1>
          <p className="text-muted-foreground">
            Manage messages, announcements, and parent communications
          </p>
        </div>
        <Button className="btn-primary mt-4 md:mt-0">
          <Plus className="w-4 h-4 mr-2" />
          New Message
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

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Contacts Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {contacts
                .filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((contact) => (
                  <div 
                    key={contact.id}
                    className="flex items-center space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/30 transition-colors"
                  >
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={contact.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {contact.type === "group" ? "G" : contact.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{contact.name}</p>
                        {contact.type === "group" && (
                          <Badge variant="secondary" className="text-xs">
                            {contact.count}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{contact.lastActive}</p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Communication Area */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="messages" className="space-y-6">
            <TabsList>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="compose">Compose</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Messages</CardTitle>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messages.map((message) => {
                      const MessageIcon = getMessageIcon(message.type);
                      return (
                        <div key={message.id} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                          <div className="flex items-start space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={message.avatar} />
                              <AvatarFallback className="bg-secondary/10 text-secondary">
                                {message.from.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center space-x-2">
                                  <p className="font-medium text-sm">{message.from}</p>
                                  <MessageIcon className="w-3 h-3 text-muted-foreground" />
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Badge className={getStatusColor(message.status)}>
                                    {message.status}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                                </div>
                              </div>
                              
                              <p className="font-medium text-sm mb-1">{message.subject}</p>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {message.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compose">
              <Card>
                <CardHeader>
                  <CardTitle>Compose Message</CardTitle>
                  <CardDescription>Send a message to students or parents</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Recipients</label>
                    <Select value={selectedRecipient} onValueChange={setSelectedRecipient}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select recipients" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grade5-students">Grade 5 Students</SelectItem>
                        <SelectItem value="grade5-parents">Grade 5 Parents</SelectItem>
                        <SelectItem value="all-parents">All Parents</SelectItem>
                        <SelectItem value="individual">Individual Contact</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Enter message subject" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Type your message here..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      rows={6}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button className="btn-primary">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline">
                      Save Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="announcements">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Announcements</CardTitle>
                    <Button className="btn-secondary">
                      <Plus className="w-4 h-4 mr-2" />
                      New Announcement
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements.map((announcement) => (
                      <div key={announcement.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold">{announcement.title}</h3>
                          <span className="text-xs text-muted-foreground">{announcement.timestamp}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">
                          {announcement.content}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>To: {announcement.recipients}</span>
                            <span>{announcement.views} views</span>
                            <span>{announcement.responses} responses</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-3 h-3 mr-1" />
                              Replies
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Communications;