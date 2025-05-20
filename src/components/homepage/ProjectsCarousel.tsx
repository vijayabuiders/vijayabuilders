
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { supabase } from "@/integrations/supabase/client";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Only fetch completed projects for the carousel
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'completed')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      
      setProjects(data as Project[]);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-6">Our Completed Works</h2>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vijaya-blue"></div>
          </div>
        ) : projects.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ProjectImageCarousel
                imageMainPath={projects[0]?.image_path}
                imagePaths={projects.map(p => p.image_path).filter(Boolean) as string[]}
                className="h-full"
                autoPlay={true}
                autoPlayInterval={4000}
                showControls={true}
              />
            </div>
            <div className="text-center mt-6">
              <Link to="/projects" className="btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">No completed projects available</div>
        )}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
