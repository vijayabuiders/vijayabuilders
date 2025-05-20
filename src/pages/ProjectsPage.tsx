
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Project } from '@/types/project';
import ProjectImageCarousel from '@/components/ProjectImageCarousel';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<{ ongoing: Project[], completed: Project[] }>({ ongoing: [], completed: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const ongoing = data?.filter(p => p.status === 'ongoing') || [];
      const completed = data?.filter(p => p.status === 'completed') || [];
      
      setProjects({ 
        ongoing: ongoing as Project[], 
        completed: completed as Project[] 
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-vijaya-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of ongoing and completed construction projects.
          </p>
        </div>
      </section>

      <section className="section-container">
        <Tabs defaultValue="ongoing" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="ongoing" className="text-lg px-8">Ongoing Projects</TabsTrigger>
              <TabsTrigger value="completed" className="text-lg px-8">Completed Projects</TabsTrigger>
            </TabsList>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vijaya-blue"></div>
            </div>
          ) : (
            <>
              <TabsContent value="ongoing">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.ongoing.map((project) => (
                    <Card key={project.id} className="overflow-hidden transition-transform hover:scale-105">
                      <div className="h-48">
                        <ProjectImageCarousel 
                          imageMainPath={project.image_path} 
                          imagePaths={project.image_paths} 
                          className="h-48"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{project.name}</CardTitle>
                          <Badge className="bg-vijaya-blue">Ongoing</Badge>
                        </div>
                        <CardDescription>{project.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{project.description}</p>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-vijaya-yellow h-2.5 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.completed.map((project) => (
                    <Card key={project.id} className="overflow-hidden transition-transform hover:scale-105">
                      <div className="h-48">
                        <ProjectImageCarousel 
                          imageMainPath={project.image_path} 
                          imagePaths={project.image_paths} 
                          className="h-48"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{project.name}</CardTitle>
                          <Badge className="bg-green-600">Completed</Badge>
                        </div>
                        <CardDescription>{project.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </section>
    </div>
  );
};

export default ProjectsPage;
