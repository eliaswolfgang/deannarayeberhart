import React from 'react';
import { Link } from 'react-router-dom';
import Folk_BG from '../../assets/DSC_1982.jpg';
import Opera_BG from '../../assets/opera_headshot2.jpg';

const Landing: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at center, #6b7280 0%, #4b5563 50%, #111827 100%)'
      }}
    >
        <div className="text-center">
          <h1 
            className="text-7xl font-bold folk-link text-gray-800 mb-8 inline-block"
            style={{
              backgroundImage: `url(${Folk_BG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <Link 
              to="/deannaray" 
              className="text-blue-400 hover:text-blue-300 hover:italic transition-all duration-200 font-serif"
            >
              deanna ray
            </Link>
          </h1>
          
          <h1 
            className="text-7xl font-bold folk-link text-gray-800 mb-8 inline-block"
            style={{
              backgroundImage: `url(${Opera_BG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <Link 
              to="/eberhart" 
              className="text-green-400 hover:text-green-300 hover:italic transition-all duration-200 font-serif"
            >
              eberhart
            </Link>
          </h1>
        </div>
      </div>
  );
};

export default Landing;
