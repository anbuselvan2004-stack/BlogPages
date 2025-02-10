import React from "react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">Our Services</h2>
        <p className="text-gray-700 mb-4">
          We offer a range of high-quality services tailored to meet the needs of
          our clients. Our expert team ensures top-notch solutions for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-blue-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-800">Web Development</h3>
            <p className="text-gray-600">Building responsive and modern websites.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-green-800">SEO Optimization</h3>
            <p className="text-gray-600">Improving search engine rankings effectively.</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-yellow-800">Digital Marketing</h3>
            <p className="text-gray-600">Boosting your online presence and engagement.</p>
          </div>
        </div>
        <button className="bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-white hover:text-orange-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
