
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RequestData {
  name: string;
  email: string;
  phone: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone } = await req.json() as RequestData;

    // Validate input data
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: name, email, and phone are required",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Create a Supabase client with the admin key from environment variables
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Send email using Supabase email service
    // Note: This is a placeholder. In a real implementation, you would use a service like Resend or your own SMTP server
    console.log("Estimation request received:", { name, email, phone });

    // Store the estimation request in the database (optional)
    const { data: savedRequest, error: saveError } = await supabaseAdmin
      .from("estimation_requests")
      .insert([{ name, email, phone }]);

    if (saveError) {
      console.error("Error saving estimation request:", saveError);
    }

    // Return a success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Estimation request received", 
        requestId: savedRequest ? savedRequest[0]?.id : null 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
