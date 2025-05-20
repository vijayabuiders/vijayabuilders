
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EstimationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Delay showing the dialog by 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000); // 7 seconds delay
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      setSubmitError('Please fill all fields');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const emailContent = `
        New Estimation Request:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
      `;
      
      // Send email to owner
      await sendEmail({
        to: 'vanniraja@vijayabuilder.com',
        subject: 'New Estimation Request from Website',
        body: emailContent,
        from: email,
        name: name
      });
      
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      
      // Close dialog after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit. Please try again or contact directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to send email
  const sendEmail = async ({ to, subject, body, from, name }: { 
    to: string; 
    subject: string; 
    body: string; 
    from: string;
    name: string;
  }) => {
    try {
      // In a real implementation, this would be an API call to a backend service
      // For now, we'll simulate success
      console.log('Sending email to:', to);
      console.log('Subject:', subject);
      console.log('Body:', body);
      console.log('From:', from);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { success: true };
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-vijaya-blue">GET FREE ESTIMATION</DialogTitle>
          <DialogDescription className="text-center">
            Fill out this form to receive a free cost estimation for your project
          </DialogDescription>
        </DialogHeader>
        
        {submitSuccess ? (
          <div className="py-6 text-center">
            <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
              Thank you! Your request has been submitted successfully. We'll get back to you soon.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            {submitError && (
              <div className="bg-red-100 text-red-700 p-2 rounded-md text-sm">
                {submitError}
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your contact number"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your email address"
                required
              />
            </div>
            
            <div className="pt-4 flex justify-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-vijaya-blue hover:bg-vijaya-darkBlue text-white px-8 py-2"
              >
                {isSubmitting ? "Submitting..." : "Get Quote"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EstimationDialog;
