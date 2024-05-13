import React from 'react';
import socialmedia from '../images/Social Media.png';
import email from '../images/email.png';
import Bgimg from '../images/Bgimg.png'; // Import your background image

const ContactPage = () => {
  return (
    <div className="flex  p-10 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Bgimg})` }}>
    {/* Left Side Block */}
    <div className="w-1/2 pr-10 mr-4 flex justify-evenly"> {/* Added mr-4 for margin-right */}
      <div className="mb-5">
        <h2 className="font-inter font-bold text-4xl leading-72 tracking-wide text-left mb-6 text-white">Have a project idea!<br/>Drop me a line.</h2>
        <p className="font-inter text-base font-normal leading-26 text-left mb-4 text-white">Aenean vestibulum felis nec egestas fringilla. Duis non felis<br/> consequat, varius sapien convallis, tincidunt nisl. </p>
        <div className="mb-4">
  <h3 className="font-inter text-base font-medium leading-14 tracking-tight text-left text-white mb-1">Email Us</h3>
  <div className="flex items-center mt-2"> {/* Adjusted mt value */}
    <img src={email} alt="Email Logo" className="w-6 h-6 mr-3" />
    <h3 className="font-inter text-3xl font-semibold leading-32 text-left text-white mr-4">info@golio.com</h3>
  </div>
</div>


        <div>
          <h3 className="font-inter text-base font-medium leading-24 text-left text-white mb-4">__Connect with us:</h3>
          <div className="flex items-center">
          <a href="https://www.facebook.com"><img src={socialmedia} alt="Facebook" className="w-30 h-30 mr-2" /></a>
           
          </div>
        </div>
      </div>
    </div>
  
    {/* Right Side Block */}
    <div className="w-[590px] pl-2 md:pl-5 px-12 flex justify-evenly bg-white rounded-xl shadow-md"> {/* Added shadow-md */}
  <div className="mb-6">
    <h2 className="font-inter font-bold text-xl md:text-3xl lg:text-4xl leading-32 lg:leading-48 tracking-tighter lg:tracking-wide text-left mb-2 text-[#061C3D]">Request A Quote — let’s work together.</h2>
    <p className="font-inter text-base font-normal leading-24 text-left mb-6 text-[#42526B]">Got a project? Drop me a line if you want to work together on something exciting. Or do you need our help? Feel free to contact us.</p>
    <form>
      <div className="mb-6 flex flex-col md:flex-row justify-between">
        <div className="mb-6">
          <label htmlFor="firstName" className="block mb-1">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder='Full name'  className="w-full md:w-56 px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email"placeholder='Email address'  className="w-full md:w-56 px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-500" />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block mb-1">Subject</label>
        <input type="text" id="subject" name="subject" placeholder='Subject'  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-500 h-8" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea id="message" name="message"placeholder='Tell us about your project...' rows="4" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-500 h-24"></textarea>
      </div>
      <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-blue-600 font-inter font-bold text-xl md:text-2xl leading-48">Request a quote ➔</button>
    </form>
  </div>
</div>




  </div>
  
  );
};

export default ContactPage;
