
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, LogOut, Users, MessageSquare, Calendar } from "lucide-react";

interface ContactQuery {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [queries, setQueries] = useState<ContactQuery[]>([]);

  useEffect(() => {
    // Check if admin is already authenticated
    const isAuth = localStorage.getItem('adminAuth') === 'true';
    setIsAuthenticated(isAuth);
    
    if (isAuth) {
      loadQueries();
    }
  }, []);

  const loadQueries = () => {
    // Load queries from localStorage (in a real app, this would be from a backend)
    const storedQueries = localStorage.getItem('contactQueries');
    if (storedQueries) {
      setQueries(JSON.parse(storedQueries));
    }
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      setLoginError('');
      loadQueries();
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setUsername('');
    setPassword('');
  };

  const markAsRead = (id: string) => {
    const updatedQueries = queries.map(query => 
      query.id === id ? { ...query, status: 'read' as const } : query
    );
    setQueries(updatedQueries);
    localStorage.setItem('contactQueries', JSON.stringify(updatedQueries));
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      new: 'bg-green-500',
      read: 'bg-blue-500', 
      replied: 'bg-gray-500'
    };
    return (
      <Badge className={`${colors[status as keyof typeof colors]} text-white`}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Admin Login
            </CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
            </div>
            {loginError && (
              <p className="text-sm text-red-600 text-center">{loginError}</p>
            )}
            <Button onClick={handleLogin} className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const newQueries = queries.filter(q => q.status === 'new').length;
  const totalQueries = queries.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Dolly Dance Hub</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Queries</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalQueries}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Queries</CardTitle>
              <Badge className="bg-green-500 text-white">{newQueries}</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{newQueries}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Date</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">{new Date().toLocaleDateString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Queries List */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Queries</CardTitle>
            <CardDescription>
              All contact form submissions from the website
            </CardDescription>
          </CardHeader>
          <CardContent>
            {queries.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No queries received yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {queries.map((query) => (
                  <div key={query.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{query.name}</h3>
                          {getStatusBadge(query.status)}
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><strong>Email:</strong> {query.email}</p>
                          <p><strong>Phone:</strong> {query.phone}</p>
                          <p><strong>Date:</strong> {new Date(query.timestamp).toLocaleString()}</p>
                        </div>
                      </div>
                      {query.status === 'new' && (
                        <Button 
                          size="sm" 
                          onClick={() => markAsRead(query.id)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Mark as Read
                        </Button>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Message:</p>
                      <p className="text-gray-600 leading-relaxed">{query.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
