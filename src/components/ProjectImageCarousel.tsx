
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectImageCarouselProps {
  imageMainPath?: string | null;
  imagePaths?: string[] | null;
  className?: string;
  showControls?: boolean;
  enableFullscreen?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({
  imageMainPath,
  imagePaths,
  className = "",
  showControls = true,
  enableFullscreen = true,
  autoPlay = true,
  autoPlayInterval = 3000
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Determine which images to display
  const allImages: string[] = [];
  
  // Add main image if it exists and isn't in imagePaths
  if (imageMainPath) {
    allImages.push(imageMainPath);
  }
  
  // Add additional images if they exist
  if (imagePaths && imagePaths.length > 0) {
    // Filter out the main image if it's already included
    imagePaths.forEach(path => {
      if (path !== imageMainPath) {
        allImages.push(path);
      }
    });
  }
  
  // News ticker style auto-play effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoPlay && allImages.length > 1 && !isDialogOpen) {
      interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % allImages.length);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300); // Fade back in after changing image
        }, 300); // Wait for fade out before changing image
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, allImages.length, autoPlayInterval, isDialogOpen]);
  
  // If no images available, return placeholder
  if (allImages.length === 0) {
    return (
      <div className={`w-full bg-gray-200 flex items-center justify-center ${className}`}>
        No Images
      </div>
    );
  }
  
  // Function to get image URL from storage
  const getImageUrl = (path: string) => {
    return supabase.storage.from('project_images').getPublicUrl(path).data.publicUrl;
  };
  
  // Navigation functions
  const goToNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % allImages.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };
  
  const goToPrevious = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };
  
  // If only one image, return simple image without controls or animation
  if (allImages.length === 1) {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <img 
          src={getImageUrl(allImages[0])} 
          alt="Project" 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  
  // Multiple images - return ticker-style carousel
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden w-full h-full">
        <img 
          src={getImageUrl(allImages[activeIndex])} 
          alt={`Project image ${activeIndex + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
      
      {/* Optional controls */}
      {showControls && (
        <>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <Button 
              onClick={goToPrevious}
              className="rounded-full bg-white/80 hover:bg-white shadow-md h-10 w-10 p-2 flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-emerald-700" />
            </Button>
            
            <Button 
              onClick={goToNext}
              className="rounded-full bg-white/80 hover:bg-white shadow-md h-10 w-10 p-2 flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-emerald-700" />
            </Button>
          </div>
          
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
            {activeIndex + 1} / {allImages.length}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
