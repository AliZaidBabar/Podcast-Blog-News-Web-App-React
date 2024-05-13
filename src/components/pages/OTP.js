import React from 'react';
import authen from '../images/authentication.png';

const OTPPage = () => {
  return (
    <div className="flex flex-row justify-evenly items-center h-screen">
      {/* Left Block */}
      <div className="w-1/3 h-screen bg-gray-200 flex items-center justify-evenly">
        {/* You can add images here */}
        <img src={authen} alt="Login Image" className="w-584 object-cover" />
      </div>

      {/* Right Block */}
      <div className="mt-50 w-1/4 h-366 ml-10">
        <h1 className="text-3xl font-bold mb-4 font-semibold text-26 leading-35.41 text-left">Enter OTP</h1>
        <p className="mb-4 text-base font-normal leading-27.24 text-left text-gray-600" style={{ fontFamily: 'Open Sans' }}>Enter your OTP to reset your password</p>
        <form className="space-y-4">
          <div className="flex justify-evenly items-center">
            <input type="text" maxLength="1" className="w-12 h-12 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-200 px-4 py-2" />
            <input type="text" maxLength="1" className="w-12 h-12 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-200 px-4 py-2" />
            <input type="text" maxLength="1" className="w-12 h-12 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-200 px-4 py-2" />
            <input type="text" maxLength="1" className="w-12 h-12 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-200 px-4 py-2" />
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="w-100 h-10 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-inter text-base font-medium leading-6">Verify</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPPage;
