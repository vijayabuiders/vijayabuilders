
-- Create a table for estimation requests
CREATE TABLE IF NOT EXISTS public.estimation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- Set up RLS policies for this table
ALTER TABLE public.estimation_requests ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to view estimation requests
CREATE POLICY "Allow authenticated users to view estimation requests"
ON public.estimation_requests
FOR SELECT
TO authenticated
USING (true);

-- Allow service role to insert estimation requests
CREATE POLICY "Allow service role to insert estimation requests"
ON public.estimation_requests
FOR INSERT
TO service_role
WITH CHECK (true);
