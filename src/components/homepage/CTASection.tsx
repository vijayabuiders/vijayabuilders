
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-vijaya-blue text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your construction needs and get a free consultation.
        </p>
        <Link to="/contact" className="btn-secondary">
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
