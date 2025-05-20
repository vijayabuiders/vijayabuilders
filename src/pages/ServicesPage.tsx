
import React from 'react';
import { Construction, ClipboardList, Briefcase } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div>
      {/* Services Hero */}
      <section className="bg-vijaya-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive construction services tailored to meet your specific needs with excellence and precision.
          </p>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="section-container">
        <h2 className="section-title">Our Works</h2>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl">
            Residential, Commercial, Industrial Building Construction and Interior Works
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 gap-12">
          {/* Construction Service */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="bg-vijaya-yellow rounded-lg p-8 flex justify-center items-center h-full">
                <Construction size={100} className="text-vijaya-blue" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-vijaya-blue">Construction</h2>
              <p className="mb-4">
                Our core service encompasses end-to-end construction solutions for residential, commercial, and industrial projects. With a focus on quality and timely delivery, our experienced team handles every aspect of the construction process.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Residential Building Construction</li>
                <li>Commercial Complex Development</li>
                <li>Industrial Facility Construction</li>
                <li>Infrastructure Projects</li>
                <li>Renovation and Remodeling</li>
              </ul>
            </div>
          </div>

          {/* Planning Service */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 md:order-2">
              <div className="bg-vijaya-yellow rounded-lg p-8 flex justify-center items-center h-full">
                <ClipboardList size={100} className="text-vijaya-blue" />
              </div>
            </div>
            <div className="md:col-span-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-vijaya-blue">Planning</h2>
              <p className="mb-4">
                Our planning services help you lay the groundwork for successful projects. From initial concept to detailed blueprints, we ensure that every project begins with a solid foundation of thoughtful planning and strategic foresight.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Architectural Planning</li>
                <li>Project Feasibility Studies</li>
                <li>Budget Planning and Cost Estimation</li>
                <li>Timeline Development</li>
                <li>Regulatory Compliance Planning</li>
              </ul>
            </div>
          </div>

          {/* Consulting Service */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="bg-vijaya-yellow rounded-lg p-8 flex justify-center items-center h-full">
                <Briefcase size={100} className="text-vijaya-blue" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-vijaya-blue">Consulting</h2>
              <p className="mb-4">
                Our consulting services provide expert guidance to address specific construction challenges. Whether you're looking for ways to optimize your project or navigate complex regulatory requirements, our consultants offer valuable insights.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Construction Management Consulting</li>
                <li>Regulatory Compliance Guidance</li>
                <li>Sustainable Construction Advisory</li>
                <li>Quality Control Protocols</li>
                <li>Risk Assessment and Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

  

      {/* Service Process */}
      <section className="bg-vijaya-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Service Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-vijaya-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Consultation</h3>
                  <p className="text-sm">Initial meeting to understand your requirements</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-vijaya-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Planning</h3>
                  <p className="text-sm">Developing detailed plans and estimates</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-vijaya-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Execution</h3>
                  <p className="text-sm">Implementing the project with quality focus</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-vijaya-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    4
                  </div>
                  <h3 className="font-bold mb-2">Delivery</h3>
                  <p className="text-sm">Project completion and client handover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vijaya-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements and how our services can help bring your vision to life.
          </p>
          <a href="/contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
