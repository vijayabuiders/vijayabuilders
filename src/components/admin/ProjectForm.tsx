
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, Upload, X, Image as ImageIcon } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Project } from '@/types/project';

interface ProjectFormProps {
  onProjectAdded: (project: Project) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onProjectAdded }) => {
  const { toast } = useToast();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    location: '',
    status: 'ongoing' as 'ongoing' | 'completed',
    progress: 0,
  });

  const handleNewProjectChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: value as typeof prev[keyof typeof prev]
    }));
  };
  
  const handleStatusChange = (value: string) => {
    setNewProject(prev => ({
      ...prev,
      status: value as 'ongoing' | 'completed'
    }));
  };
  
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNewProject(prev => ({
      ...prev,
      progress: value
    }));
  };

  const uploadImages = async (files: File[]) => {
    try {
      const imagePaths: string[] = [];
      
      console.log(`Starting upload of ${files.length} images`);
      
      for (const file of files) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        console.log(`Uploading file: ${filePath}`);
        
        const { error: uploadError, data } = await supabase.storage
          .from('project_images')
          .upload(filePath, file);

        if (uploadError) {
          console.error('Error uploading file:', uploadError);
          toast({
            title: "Upload Error",
            description: "There was an error uploading one or more images.",
            variant: "destructive"
          });
          throw uploadError;
        }
        
        console.log('File uploaded successfully:', filePath);
        imagePaths.push(filePath);
      }
      
      console.log('All files uploaded successfully:', imagePaths);
      
      return imagePaths;
    } catch (error) {
      console.error('Error in uploadImages function:', error);
      throw error;
    }
  };
  
  const handleAddProject = async () => {
    try {
      setIsLoading(true);
      
      if (!newProject.name || !newProject.description || !newProject.location) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }

      let projectData: any = { ...newProject };
      
      console.log(`Selected files count: ${selectedFiles.length}`);
      
      // Handle multiple image uploads
      if (selectedFiles.length > 0) {
        const imagePaths = await uploadImages(selectedFiles);
        
        if (imagePaths.length === 1) {
          projectData.image_path = imagePaths[0];
          projectData.image_paths = imagePaths;
        } else if (imagePaths.length > 1) {
          projectData.image_paths = imagePaths;
          projectData.image_path = imagePaths[0]; // Set the first image as the main image
        }
      } else {
        console.log("No files selected for upload");
      }

      console.log("Submitting project data:", projectData);
      
      const { data, error } = await supabase.from('projects').insert([projectData]).select();

      if (error) {
        console.error('Error inserting project:', error);
        toast({
          title: "Error",
          description: "Failed to add project: " + error.message,
          variant: "destructive"
        });
        throw error;
      }

      // Reset form
      setNewProject({
        name: '',
        description: '',
        location: '',
        status: 'ongoing',
        progress: 0,
      });
      setSelectedFiles([]);
      
      toast({
        title: "Success",
        description: "Project added successfully",
      });

      onProjectAdded(data[0] as Project);
    } catch (error) {
      console.error('Error adding project:', error);
      toast({
        title: "Error",
        description: "Failed to add project",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
      
      // Add debugging
      console.log("Files selected:", filesArray.length);
      filesArray.forEach((file, index) => {
        console.log(`File ${index + 1}:`, file.name, file.type, file.size);
      });
    } else {
      console.log("No files selected");
    }
  };
  
  const removeSelectedFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="shadow-lg border-emerald-100">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Add New Project</CardTitle>
        <CardDescription className="text-emerald-50">Create a new construction project</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 pt-6">
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium mb-1">
            Project Name *
          </label>
          <Input
            id="projectName"
            name="name"
            value={newProject.name}
            onChange={handleNewProjectChange}
            placeholder="Enter project name"
            required
            className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-300"
          />
        </div>
        
        <div>
          <label htmlFor="projectLocation" className="block text-sm font-medium mb-1">
            Location *
          </label>
          <Input
            id="projectLocation"
            name="location"
            value={newProject.location}
            onChange={handleNewProjectChange}
            placeholder="Enter project location"
            required
            className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-300"
          />
        </div>
        
        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium mb-1">
            Description *
          </label>
          <Textarea
            id="projectDescription"
            name="description"
            value={newProject.description}
            onChange={handleNewProjectChange}
            placeholder="Enter project description"
            rows={4}
            required
            className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-300"
          />
        </div>
        
        <div>
          <label htmlFor="projectImagesInput" className="block text-sm font-medium mb-1">
            Project Images (Multiple)
          </label>
          
          <div className="flex flex-col space-y-3">
            <div 
              onClick={() => document.getElementById('projectImagesInput')?.click()}
              className="cursor-pointer border-2 border-dashed border-emerald-300 bg-emerald-50 hover:bg-emerald-100 transition-colors rounded-lg p-6 text-center"
            >
              <div className="flex flex-col items-center justify-center">
                <ImageIcon className="h-12 w-12 text-emerald-500 mb-2" />
                <h4 className="text-lg font-medium text-emerald-700">Click to select images</h4>
                <p className="text-sm text-emerald-600">Upload multiple project photos</p>
              </div>
            </div>
            
            <Input
              id="projectImagesInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
            
            <div className="text-center text-sm mt-1">
              {selectedFiles.length > 0 
                ? <span className="font-bold text-emerald-700">{selectedFiles.length} file(s) selected</span> 
                : 'No files selected yet'}
            </div>
          </div>
          
          {/* Preview selected images */}
          {selectedFiles.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Selected Images ({selectedFiles.length})</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="relative w-full aspect-square border rounded-md overflow-hidden group">
                    <img 
                      src={URL.createObjectURL(file)} 
                      alt={`Preview ${index}`} 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSelectedFile(index);
                      }}
                      aria-label="Remove image"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Status
            </label>
            <Select
              value={newProject.status}
              onValueChange={handleStatusChange}
            >
              <SelectTrigger className="border-emerald-200 focus:border-emerald-400">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ongoing">Ongoing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Progress ({newProject.progress}%)
            </label>
            <Input
              type="range"
              value={newProject.progress}
              onChange={handleProgressChange}
              min="0"
              max="100"
              step="1"
              className="accent-emerald-500"
            />
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-emerald-500 h-2.5 rounded-full" 
                style={{ width: `${newProject.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 rounded-b-lg">
        <Button 
          onClick={handleAddProject} 
          disabled={isLoading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          {isLoading ? (
            <>
              <div className="h-5 w-5 mr-2 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              Creating Project...
            </>
          ) : (
            <>
              <Plus size={18} className="mr-2" />
              Add Project
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectForm;
