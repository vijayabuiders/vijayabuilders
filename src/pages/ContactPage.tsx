
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-vijaya-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for inquiries, quotes, or to discuss your construction needs.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vijaya-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vijaya-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vijaya-blue"
                  required
                ></textarea>
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-vijaya-blue hover:bg-vijaya-lightBlue text-white font-medium py-2 px-6 rounded-md"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-vijaya-yellow p-3 rounded-full mr-4">
                  <MapPin className="text-vijaya-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Our Location</h3>
                  <a 
                    href="https://maps.app.goo.gl/oTh3UTK1montHqXK7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    No:221/2, First Floor,<br/>
                    Thirumudivakkam Main Road,<br/>
                    Near City Union Bank,<br/>
                    Thirumudivakkam, Chennai-600 132.
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vijaya-yellow p-3 rounded-full mr-4">
                  <Phone className="text-vijaya-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <a href="tel:+919566202803" className="text-blue-500 hover:underline block">
                    +91 95662 02803
                  </a>
                  <a href="tel:+916369383559" className="text-blue-500 hover:underline block">
                    +91 63693 83559
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vijaya-yellow p-3 rounded-full mr-4">
                  <Mail className="text-vijaya-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <a 
                    href="mailto:vanniraja@vijayabuilder.com" 
                    className="text-blue-500 hover:underline block"
                  >
                    vanniraja@vijayabuilder.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-12">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us on the Map</h2>
        </div>
        <div className="w-full h-[400px] bg-gray-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0447414207383!2d80.0952061!3d12.9689889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5449f353ae5%3A0x2561a93c25830519!2sVIJAYA%20BUILDER!5e0!3m2!1sen!2sin!4v1746276524720!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Vijaya Builders location map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
