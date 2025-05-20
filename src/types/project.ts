
export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  status: 'ongoing' | 'completed';
  progress: number;
  image_path?: string | null;
  image_paths?: string[] | null;
  created_at: string;
}
