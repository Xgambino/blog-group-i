import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './footercontainer.css';

function FooterContainer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError('Please enter your email');
    } else {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        // Resets
        setEmail(''); 
        setError('');
        // Reset after 3 seconds
      }, 3000); 
    }
  };

  return (
    <div className="footer-container">
      <footer className="bg-gradient-to-r from-blue-300 to-purple-300 text-white py-12">
        <div className='footer-container-left'>
        <h1 className='text-black font-serif text-2xl font-bold mb-2 hover:text-rose-950'>Welcome to COOl Blog🍹.... </h1>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center hover:text-stone-950">
          <span>
            <img className="profilePicture w-1/2 h-48 object-cover" src="src/assets/cool2.jpeg" alt="cool_logo" /><br/>
            Are you passionate about writing and sharing your voice with the world? <br/>
            Whether you're a seasoned writer or a budding wordsmith,<br/>
            We invite you to be a part of the Cool Blog community.<br/>
            Share your stories, express your ideas,<br/>
            and connect with like-minded individuals who share your passion for creativity and knowledge.<br/>
            Together, let's make Cool Blog the coolest place on the internet for sharing ideas,<br/>
            sparking conversations, and inspiring change.<br/>
            - COOl Blog 🍹.<br/>
          </span>
          </div>
          <div className='footer-container-right'>
          <div className="mb-6 md:mb-0">
            <h3 className="text-2l font-bold mb-4">Stay Connected</h3>
            <p className="text-lg">Follow us on social media:</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://web.facebook.com/" className="text-white hover:text-gray-300 hover:text-indigo-800">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com/" className="text-white hover:text-gray-300 hover:text-indigo-800">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/" className="text-white hover:text-gray-300 hover:text-indigo-800">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/" className="text-white hover:text-gray-300 hover:text-indigo-800">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.linkedin.com/" className="text-white hover:text-gray-300 hover:text-indigo-800">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="hover:text-rose-950">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="bg-white text-gray-800 px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            {error && <p className="text-red-600">{error}</p>}
            {subscribed && <p className="text-green-500">You are now subscribed to the newsletter!</p>}
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterContainer;
