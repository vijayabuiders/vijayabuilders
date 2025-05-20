
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-vijaya-lightGray px-4">
      <h1 className="text-8xl font-bold text-vijaya-blue mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
      <p className="text-gray-600 mb-8 text-center max-w-lg">
        We're sorry, the page you requested could not be found. Please check the URL or return to the homepage.
      </p>
      <Link to="/" className="btn-primary">
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
