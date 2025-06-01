import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-400">
      <div className="container mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold text-white">Anisha Parmar</h2>
          <p className="mt-2 text-sm text-gray-400">
            Building web and app experiences with passion.
          </p>
        </div>

      
        <div className="flex justify-center space-x-6 mb-6 md:mb-0">
          <a
            href="https://github.com/anisha-max"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-transform transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/anisha-parmar-997160309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:parmaranisha761@gmail.com"
            className="text-gray-400 hover:text-green-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
        </div>


        <div className="flex justify-center space-x-6 text-sm">
          <a
            href="/about"
            className="hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="/projects"
            className="hover:text-white transition duration-300"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>

 
      <div className="border-t border-gray-700 mt-6">
        <div className="container mx-auto px-6 py-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Anisha Parmar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
