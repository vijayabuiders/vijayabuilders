
import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a nav link
  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <NavLink to="/" className="flex items-center" onClick={handleNavClick}>
              <img 
                src="/logo-vb (2).png" 
                alt="Vijaya Builders Logo" 
                className="h-12 md:h-16 lg:h-20"
              />
            </NavLink>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-vijaya-blue"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink to="/" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                Home
              </NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                About Us
              </NavLink>
              <NavLink to="/services" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                Services
              </NavLink>
              <NavLink to="/projects" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation - Admin removed */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <NavLink to="/" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                Home
              </NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                About Us
              </NavLink>
              <NavLink to="/services" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                Services
              </NavLink>
              <NavLink to="/projects" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "text-vijaya-blue font-bold" : "text-vijaya-blue hover:text-vijaya-darkBlue"} onClick={handleNavClick}>
                Contact Us
              </NavLink>
            </div>
          </nav>
        )}
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <footer className="bg-vijaya-darkBlue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Vijaya Builders</h3>
              <p>Building dreams into reality since 2021.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><NavLink to="/" className="hover:text-vijaya-yellow transition-colors">Home</NavLink></li>
                <li><NavLink to="/about" className="hover:text-vijaya-yellow transition-colors">About Us</NavLink></li>
                <li><NavLink to="/services" className="hover:text-vijaya-yellow transition-colors">Services</NavLink></li>
                <li><NavLink to="/projects" className="hover:text-vijaya-yellow transition-colors">Projects</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-vijaya-yellow transition-colors">Contact Us</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
              <address className="not-italic">
                <div className="flex items-start">
                  <a
                    href="https://maps.app.goo.gl/oTh3UTK1montHqXK7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:no-underline"
                  >
                    No:221/2, First Floor,<br/>
                    Thirumudivakkam Main Road,<br/>
                    Near City Union Bank,<br/>
                    Thirumudivakkam, Chennai-600 132.
                  </a>
                  <button 
                    onClick={() => window.open('https://maps.app.goo.gl/oTh3UTK1montHqXK7', '_blank')}
                    className="ml-2 bg-vijaya-yellow text-vijaya-blue p-1 rounded-sm text-xs"
                  >
                    View Map
                  </button>
                </div>

                <p className="mt-2">
                  Email: <a href="mailto:vanniraja@vijayabuilder.com" style={{ color: '#93c5fd', textDecoration: 'underline' }}>vanniraja@vijayabuilder.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+919566202803" style={{ color: '#93c5fd', textDecoration: 'underline' }}>+91 95662 02803</a>
                </p>
                <p>
                  Phone: <a href="tel:+916369383559" style={{ color: '#93c5fd', textDecoration: 'underline' }}>+91 63693 83559</a>
                </p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Vijaya Builders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
