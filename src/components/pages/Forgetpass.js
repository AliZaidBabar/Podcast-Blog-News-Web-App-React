import React, { useState } from 'react';
import authen from '../images/authentication.png';

const ForgetpassPage = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPhoneForm, setShowPhoneForm] = useState(false);

  const handleEmailCheckboxChange = (e) => {
    setShowEmailForm(e.target.checked);
  };

  const handlePhoneCheckboxChange = (e) => {
    setShowPhoneForm(e.target.checked);
  };

  return (
    <div className="flex flex-row justify-evenly items-center h-screen">
      {/* Left Block */}
      <div className="w-1/3 h-screen bg-gray-200 flex items-center justify-evenly">
        {/* You can add images here */}
        <img src={authen} alt="Login Image" className="w-584 object-cover" />
      </div>

      {/* Right Block */}
      <div className="mt-50 w-1/4 h-366 ml-10">
        <h1 className="text-3xl font-bold mb-4 font-semibold text-26 leading-35.41 text-left">Forgot Password</h1>
        <p className="mb-4 text-base font-normal leading-27.24 text-left text-gray-600" style={{ fontFamily: 'Open Sans' }}>Enter your email account to reset your password.</p>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="emailCheckbox" className="mr-2" onChange={handleEmailCheckboxChange} />
          <label htmlFor="emailCheckbox" className="text-sm font-medium text-gray-700">Email</label>
          <input type="checkbox" id="phoneCheckbox" className="ml-8 mr-2" onChange={handlePhoneCheckboxChange} />
          <label htmlFor="phoneCheckbox" className="text-sm font-medium text-gray-700">Phone number</label>
        </div>
        {showEmailForm && (
          <form className="space-y-4">
            <div>
              <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="resetEmail" name="resetEmail" placeholder="Enter your email" type="email" className="mt-1 block max-w-1000 w-100 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-100 px-4 py-2" />
            </div>
            <div className="flex justify-center">
      <button type="submit" className="w-100 h-10 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-inter text-base font-medium leading-6">Forget Password</button>
      </div>
          </form>
        )}
        {showPhoneForm && (
          <form className="space-y-4">
            <div>
              <label htmlFor="resetPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input id="resetPhone" name="resetPhone" placeholder="Enter your phone number" type="text" className="mt-1 block max-w-1000 w-100 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-100 px-4 py-2" />
            </div>
            <div className="flex justify-center">
      <button type="submit" className="w-100 h-10 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-inter text-base font-medium leading-6">Forget Password</button>
      </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetpassPage;
