import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen  text-white p-6 flex items-center justify-center">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <img 
          src="https://via.placeholder.com/400" 
          alt="About Us" 
          className="mx-auto mb-6 rounded-lg shadow-md"
        />
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">Who We Are</h2>
        <p className="text-gray-300 mb-4">
          We are a passionate team dedicated to innovation and excellence. Our goal
          is to craft high-quality solutions that meet and exceed expectations.
        </p>
        <p className="text-gray-300 mb-4">
          Our journey is fueled by creativity, technology, and a relentless
          pursuit of perfection. We embrace challenges and turn them into
          opportunities for growth.
        </p>
        <p className="text-gray-300 mb-4">
          With a commitment to sustainability and customer satisfaction, we aim to
          shape the future while maintaining our core values of integrity and
          transparency.
        </p>
        <p className="text-yellow-400 font-semibold mb-6">
          Join us as we continue to innovate and make a lasting impact.
        </p>
        <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
