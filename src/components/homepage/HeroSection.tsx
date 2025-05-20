import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroImages = [
  { id: "1", image_path: "/h3.jpeg" },
  { id: "2", image_path: "/House.jpeg" },
  { id: "3", image_path: "/home2.jpeg" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstAnimationDone, setFirstAnimationDone] = useState(false);

  useEffect(() => {
    if (currentIndex === 0) {
      setFirstAnimationDone(false);
      const timeout = setTimeout(() => setFirstAnimationDone(true), 2000);
      return () => clearTimeout(timeout);
    } else {
      setFirstAnimationDone(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          width: 100vw;
          height: 500px;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }
        @media (max-width: 640px) {
          .hero { height: 320px; }
        }
        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          z-index: 0;
        }
        .slide.active {
          opacity: 1;
          z-index: 10;
        }
        .content-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 650px;
          width: 90%;
          z-index: 20;
          user-select: none;
          opacity: 1;
          transition: none;
        }
        .content-wrapper.animate {
          opacity: 0;
          animation: fadeInText 2s ease forwards;
        }
        @keyframes fadeInText {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        .content-overlay {
          background-color: rgba(0, 0, 0, 0.6);
          padding: 1.5rem 1.8rem;
          border-radius: 12px;
        }
        @media (max-width: 640px) {
          .content-overlay {
            background-color: transparent;
            padding: 0;
          }
        }
        .content {
          text-align: center;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.9);
          font-weight: 500;
        }
        .content h1 {
          font-size: 3rem;
          margin-bottom: 0.8rem;
          font-weight: 500;
          line-height: 1.2;
          color: #fff;
        }
        .content p {
          font-size: 1.4rem;
          margin-bottom: 1.8rem;
          font-weight: 500;
          color: #fff;
        }
        @media (max-width: 640px) {
          .content h1 {
            font-size: 2rem;
          }
          .content p {
            font-size: 1rem;
          }
        }
        .btn {
          display: inline-block;
          margin: 0 0.6rem;
          padding: 0.75rem 2.2rem;
          border: none;
          border-radius: 4px;
          background-color: #FFD700;
          color: #000;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #FFC300;
          color: #000;
        }
      `}</style>

      <section className="hero">
        {heroImages.map((img, idx) => (
          <div
            key={img.id}
            className={`slide ${idx === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img.image_path})` }}
          >
            <div
              className={`content-wrapper ${
                idx === 0 && idx === currentIndex && !firstAnimationDone ? "animate" : ""
              }`}
            >
              <div className="content-overlay">
                <div className="content">
                  <h1>Building Excellence, Delivering Trust</h1>
                  <p>
                    Premier construction services with a commitment to quality,
                    innovation, and customer satisfaction.
                  </p>
                  <Link to="/projects" className="btn">
                    View Our Projects
                  </Link>
                  <Link to="/contact" className="btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HeroSection;
