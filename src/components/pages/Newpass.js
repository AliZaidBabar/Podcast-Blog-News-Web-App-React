import React from 'react';
import authen from '../images/authentication.png';
import google from '../images/google.png';

const NewpassPage = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      {/* Left Block */}
      <div className="w-1/3 h-screen bg-gray-200">
        {/* You can add images here */}
        <img src={authen} alt="Login Image" className="w-584 object-cover mt-60" />
      </div>

      {/* Right Block */}
      <div className="w-1/2 p-8 max-w-[600px] h-[540px] mt-8 ml-723 flex flex-col">
        <div>
          <h1 className="text-3xl font-bold mb-4">Change Password</h1>
          <p className="mb-4 text-base font-normal leading-27.24 text-left text-gray-600" style={{ fontFamily: 'Open Sans' }}>Enter your new password</p>

          <form className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.15000000596046448px', textAlign: 'left', color: '#535D73' }}>Password</label>
              <div className="relative">
                <input id="password" name="password" placeholder='Enter your password' type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-100 px-4 py-2" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  {/* Eye icon */}
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a7 7 0 00-9.896 9.896l1.414-1.414a5 5 0 017.072-7.072l1.414-1.414zm-1.414 1.414a5 5 0 017.072 7.072l-1.414 1.414a7 7 0 00-9.896-9.896l1.414-1.414z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.15000000596046448px', textAlign: 'left', color: '#535D73' }}>Confirm Password</label>
              <div className="relative mb-4">
                <input id="confirmPassword" name="confirmPassword" placeholder='Confirm your password' type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-100 px-4 py-2" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  {/* Eye icon */}
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a7 7 0 00-9.896 9.896l1.414-1.414a5 5 0 017.072-7.072l1.414-1.414zm-1.414 1.414a5 5 0 017.072 7.072l-1.414 1.414a7 7 0 00-9.896-9.896l1.414-1.414z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <button type="submit" className="w-100 h-10 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-inter text-base font-medium leading-6">Login</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default NewpassPage;
