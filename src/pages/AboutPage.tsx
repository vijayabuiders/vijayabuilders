
import React from 'react';
import { Check, Percent, Handshake } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* About Hero */}
      <section className="bg-vijaya-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Vijaya Builders</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building excellence and creating lasting impressions through quality construction since 2021.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Founded in 2021, Vijaya Builders has quickly grown to become one of the most trusted names in the construction industry. Our journey began with a simple mission: to deliver quality construction services with integrity and dedication.
            </p>
            <p className="mb-4">
              We have successfully completed 13+ projects covering over 25,000+ sq.ft and continue to grow. Our commitment to excellence and customer satisfaction has established our reputation for reliability.
            </p>
            <p>
              Today, Vijaya Builders continues to innovate and grow, embracing new technologies and sustainable practices while maintaining our core values of quality, integrity, and customer satisfaction.
            </p>
          </div>
          <div className="bg-vijaya-lightGray p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Timeline</h3>
            <div className="space-y-6">
              <div>
                <p className="text-vijaya-blue font-bold">2021</p>
                <p>Founded as a residential contractor</p>
              </div>
              <div>
                <p className="text-vijaya-blue font-bold">2021</p>
                <p>Expanded to commercial construction</p>
              </div>
              <div>
                <p className="text-vijaya-blue font-bold">2022</p>
                <p>Completed our 10th project</p>
              </div>
              <div>
                <p className="text-vijaya-blue font-bold">2023</p>
                <p>Adopted sustainable construction practices</p>
              </div>
              <div>
                <p className="text-vijaya-blue font-bold">2024</p>
                <p>Reached 25,000+ sq.ft of construction</p>
              </div>
              <div>
                <p className="text-vijaya-blue font-bold">Today</p>
                <p>Continue to grow and innovate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-vijaya-lightGray py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-vijaya-blue">Our Mission</h2>
              <p>
                To deliver exceptional construction services that exceed client expectations through innovative solutions, quality craftsmanship, and unwavering commitment to excellence. We strive to build not just structures, but lasting relationships based on trust and satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-vijaya-blue">Our Vision</h2>
              <p>
                To be the most trusted name in construction, recognized for our integrity, quality, innovation, and commitment to sustainable practices. We aim to set new standards in the industry while creating value for our clients, employees, and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-container">
        <h2 className="section-title">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-l-4 border-vijaya-yellow p-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p>We never compromise on the quality of our work and materials, ensuring longevity and client satisfaction.</p>
          </div>
          <div className="border-l-4 border-vijaya-yellow p-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p>We conduct our business with honesty, transparency, and ethical practices at all times.</p>
          </div>
          <div className="border-l-4 border-vijaya-yellow p-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>We continuously seek innovative solutions and embrace new technologies to improve our services.</p>
          </div>
          <div className="border-l-4 border-vijaya-yellow p-6 bg-white shadow-md">
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p>We are committed to environmentally responsible construction practices and sustainable development.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container bg-vijaya-lightGray py-12">
        <div className="max-w-4xl mx-auto border-4 border-vijaya-yellow rounded-xl shadow-xl bg-white p-8 relative overflow-hidden group transition duration-500">
          <h2 className="text-4xl font-bold text-vijaya-blue text-center mb-10 relative z-10">Why Choose Us?</h2>
          
          <div className="space-y-6 text-center text-black font-semibold text-lg z-10 relative">
            <div className="bg-vijaya-lightGray hover:bg-vijaya-yellow/20 px-6 py-4 rounded-lg transition duration-300 shadow-md">
              Work Progress Update
            </div>
            <div className="bg-vijaya-lightGray hover:bg-vijaya-yellow/20 px-6 py-4 rounded-lg transition duration-300 shadow-md">
              100% Transparency Pricing
            </div>
            <div className="bg-vijaya-lightGray hover:bg-vijaya-yellow/20 px-6 py-4 rounded-lg transition duration-300 shadow-md">
              Quality Assurance
            </div>
            <div className="bg-vijaya-lightGray hover:bg-vijaya-yellow/20 px-6 py-4 rounded-lg transition duration-300 shadow-md">
              On Time Hand Over
            </div>
            <div className="bg-vijaya-lightGray hover:bg-vijaya-yellow/20 px-6 py-4 rounded-lg transition duration-300 shadow-md">
              Hassle Free Management
            </div>
          </div>

          {/* Subtle animated background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-vijaya-yellow/10 via-white to-vijaya-yellow/10 opacity-20 scale-150 rotate-6 z-0 group-hover:scale-100 transition-all duration-1000" />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
