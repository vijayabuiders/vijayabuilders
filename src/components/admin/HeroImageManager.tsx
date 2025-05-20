
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Trash2, Upload } from 'lucide-react';
import { toast } from "sonner";

const HeroImageManager = () => {
  const [heroImages, setHeroImages] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHeroImages();
  }, []);

  const fetchHeroImages = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('hero_images')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setHeroImages(data || []);
    } catch (error) {
      console.error('Error fetching hero images:', error);
      toast.error('Failed to load hero images');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      setIsUploading(true);
      const file = files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `hero_${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;

      // Upload the file
      const { error: uploadError } = await supabase.storage
        .from('projects')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('projects')
        .getPublicUrl(fileName);

      // Add to hero_images table
      const { error: insertError } = await supabase
        .from('hero_images')
        .insert({
          image_path: fileName,
          display_order: heroImages.length + 1
        });

      if (insertError) throw insertError;

      toast.success('Hero image uploaded successfully');
      fetchHeroImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setIsUploading(false);
      // Reset the file input
      e.target.value = '';
    }
  };

  const handleDeleteImage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const imageToDelete = heroImages.find(img => img.id === id);
      
      // Delete from the database
      const { error } = await supabase
        .from('hero_images')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // If the image exists in storage, delete it
      if (imageToDelete && imageToDelete.image_path) {
        await supabase.storage
          .from('projects')
          .remove([imageToDelete.image_path]);
      }

      toast.success('Hero image deleted successfully');
      fetchHeroImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error('Failed to delete image');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Manage Hero Banner Images</h2>
      
      {/* Image Upload */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload New Hero Image
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-vijaya-blue hover:text-vijaya-blue/90">
                <span>Upload a file</span>
                <input 
                  type="file" 
                  className="sr-only" 
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={isUploading}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
            {isUploading && <p className="text-sm text-vijaya-blue">Uploading...</p>}
          </div>
        </div>
      </div>
      
      {/* Current Images */}
      <h3 className="text-lg font-medium mb-4">Current Hero Images</h3>
      
      {isLoading ? (
        <p>Loading images...</p>
      ) : heroImages.length === 0 ? (
        <p className="text-gray-500">No hero images found. Upload some images to display in the banner.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {heroImages.map((image) => (
            <div key={image.id} className="relative group">
              <img 
                src={`${supabase.storage.from('projects').getPublicUrl(image.image_path).data.publicUrl}`}
                alt="Hero Banner" 
                className="w-full h-32 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-500">Order: {image.display_order}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroImageManager;
