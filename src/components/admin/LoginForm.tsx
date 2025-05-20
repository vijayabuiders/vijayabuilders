
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { LogIn } from 'lucide-react';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const { toast } = useToast();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loginForm.email === 'admin@vijayabuilders.com' && loginForm.password === 'admin123') {
      onLoginSuccess();
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-vijaya-lightGray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-center text-vijaya-blue">Vijaya Builders</h1>
          <h2 className="mt-6 text-center text-2xl font-bold">Admin Login</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Button type="submit" className="w-full bg-vijaya-blue">
                  <LogIn className="mr-2 h-4 w-4" /> Sign in
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="text-sm text-gray-500 text-center">
            For demo: Use email "admin@vijayabuilders.com" and password "admin123"
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
