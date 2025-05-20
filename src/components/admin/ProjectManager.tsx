
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Trash, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Project } from '@/types/project';
import ProjectImageCarousel from '@/components/ProjectImageCarousel';

interface ProjectManagerProps {
  projects: Project[];
  isLoading: boolean;
  refreshProjects: () => Promise<void>;
}

const ProjectManager: React.FC<ProjectManagerProps> = ({ projects, isLoading, refreshProjects }) => {
  const { toast } = useToast();
  
  const handleUpdateProject = async (id: string, updates: Partial<Project> = {}) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id);
        
      if (error) throw error;
      
      await refreshProjects();
      
      toast({
        title: "Success",
        description: "Project updated successfully",
      });
    } catch (error) {
      console.error('Error updating project:', error);
      toast({
        title: "Error",
        description: "Failed to update project",
        variant: "destructive"
      });
    }
  };
  
  const handleRemoveProject = async (id: string) => {
    try {
      const project = projects.find(p => p.id === id);
      
      // Remove image from storage
      if (project?.image_path) {
        const { error: storageError } = await supabase.storage
          .from('project_images')
          .remove([project.image_path]);
          
        if (storageError) throw storageError;
      }
      
      // Remove multiple images if present
      if (project?.image_paths && project.image_paths.length > 0) {
        const { error: storageError } = await supabase.storage
          .from('project_images')
          .remove(project.image_paths);
          
        if (storageError) throw storageError;
      }
      
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      await refreshProjects();
      
      toast({
        title: "Success",
        description: "Project removed successfully",
      });
    } catch (error) {
      console.error('Error removing project:', error);
      toast({
        title: "Error",
        description: "Failed to remove project",
        variant: "destructive"
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vijaya-blue"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Existing Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="h-48">
                <ProjectImageCarousel
                  imageMainPath={project.image_path}
                  imagePaths={project.image_paths}
                  className="h-48"
                />
              </div>
              <div className="md:col-span-2 p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.location}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 pb-4">
                  <p className="mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Status
                      </label>
                      <Select
                        defaultValue={project.status}
                        onValueChange={(value) => handleUpdateProject(project.id, { status: value as 'ongoing' | 'completed' })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {project.status === 'ongoing' && (
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Progress ({project.progress}%)
                        </label>
                        <Input
                          type="range"
                          min="0"
                          max="100"
                          value={project.progress}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            handleUpdateProject(project.id, { progress: value });
                          }}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4 flex justify-between">
                  <Button 
                    variant="outline" 
                    className="bg-vijaya-blue text-white hover:bg-vijaya-lightBlue"
                    onClick={() => handleUpdateProject(project.id)}
                  >
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleRemoveProject(project.id)}
                  >
                    <Trash className="mr-2 h-4 w-4" /> Remove Project
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectManager;
