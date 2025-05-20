
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { Project } from '@/types/project';
import LoginForm from '@/components/admin/LoginForm';
import ProjectManager from '@/components/admin/ProjectManager';
import ProjectForm from '@/components/admin/ProjectForm';
import HeroImageManager from '@/components/admin/HeroImageManager';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      fetchProjects();
    }
  }, [isLoggedIn]);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data as Project[] || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleProjectAdded = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  if (!isLoggedIn) {
    return <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />;
  }
  
  return (
    <div className="min-h-screen bg-vijaya-lightGray">
      <div className="bg-emerald-700 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <p className="mt-2">Manage your construction projects and website content</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="manage" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="manage">Manage Projects</TabsTrigger>
            <TabsTrigger value="add">Add New Project</TabsTrigger>
            <TabsTrigger value="hero">Hero Images</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manage">
            <ProjectManager 
              projects={projects} 
              isLoading={isLoading} 
              refreshProjects={fetchProjects} 
            />
          </TabsContent>
          
          <TabsContent value="add">
            <ProjectForm onProjectAdded={handleProjectAdded} />
          </TabsContent>
          
          <TabsContent value="hero">
            <HeroImageManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
