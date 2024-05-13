import React from 'react';
import authen from '../images/authentication.png';
import google from '../images/google.png';

const CreateaccntPage = () => {
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
          <h1 className="text-3xl font-bold mb-4">Create an account</h1>
          <p className="mb-4 text-base font-normal leading-27.24 text-left text-gray-600" style={{ fontFamily: 'Open Sans' }}>Please fill in the fields below:</p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium" style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.15000000596046448px', textAlign: 'left', color: '#535D73' }}>First Name</label>
                <input id="firstName" name="firstName" placeholder='Enter your first name' type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-100 px-4 py-2" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium" style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.15000000596046448px', textAlign: 'left', color: '#535D73' }}>Last Name</label>
                <input id="lastName" name="lastName" placeholder='Enter your last name' type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-100 px-4 py-2" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium" style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.15000000596046448px', textAlign: 'left', color: '#535D73' }}>Email</label>
              <input id="email" name="email" placeholder='Enter your email' type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-100 px-4 py-2" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium" style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.15000000596046448px', textAlign: 'left', color: '#535D73' }}>Password</label>
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
              <label htmlFor="confirmPassword" className="block text-sm font-medium" style={{ fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.15000000596046448px', textAlign: 'left', color: '#535D73' }}>Confirm Password</label>
              <div className="relative">
                <input id="confirmPassword" name="confirmPassword" placeholder='Confirm your password' type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-100 px-4 py-2" style={{ marginBottom: '1rem' }} />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  {/* Eye icon */}
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a7 7 0 00-9.896 9.896l1.414-1.414a5 5 0 017.072-7.072l1.414-1.414zm-1.414 1.414a5 5 0 017.072 7.072l-1.414 1.414a7 7 0 00-9.896-9.896l1.414-1.414z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="newsletterCheckbox" className="mr-2" />
              <label htmlFor="newsletterCheckbox" className="text-sm font-medium text-gray-700">Yes, I want to subscribe to the newsletter now</label>
            </div>
          </form>

          <div className="flex justify-center">
            <button type="submit" className="w-100 h-10 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-inter text-base font-medium leading-6">Create Account</button>
          </div>
        </div>
       
        <div className="mt-4 flex justify-center items-center">
          <button className="flex items-center bg-white p-2 shadow-md w-full md:w-auto">
            <img src={google} alt="Google Logo" className="w-6 h-6 mr-2" />
            <p className="text-#88756D">Continue with Google</p>
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="mt-4">Already have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Back to Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default CreateaccntPage;
