
import { Link } from "react-router-dom";
import { Construction, ClipboardList, Briefcase } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service-card flex flex-col items-center text-center">
          <Construction size={60} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Construction</h3>
          <p>End-to-end construction services with attention to detail and quality craftsmanship.</p>
        </div>
        <div className="service-card flex flex-col items-center text-center">
          <ClipboardList size={60} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Planning</h3>
          <p>Strategic planning and design to optimize resources and ensure project success.</p>
        </div>
        <div className="service-card flex flex-col items-center text-center">
          <Briefcase size={60} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Consulting</h3>
          <p>Expert consultation on construction challenges, regulations, and best practices.</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to="/services" className="btn-primary">
          Explore All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
