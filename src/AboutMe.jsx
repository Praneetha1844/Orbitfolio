import React from 'react';

function AboutMe() {
  return (
    <div
      className="min-h-screen text-black flex flex-col lg:flex-row bg-black justify-between items-center px-4"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Left Content */}
      <div className="max-w-lg text-left mx-auto lg:ml-64 lg:mr-0">
        {/* Centered Heading */}
        <h1 className="text-4xl font-bold mb-6 text-white text-center lg:text-left">About Me</h1>

        {/* Left-Aligned Paragraphs */}
        <p className="text-lg leading-relaxed text-white">
          Hi! I'm Praneetha Potharaju, a passionate developer of code, logic, and just the right amount of magic.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-white">
          Breaking code? Never. Breaking stereotypes? Always. I take messy problems, sprinkle a little logic (and coffee), and voilà – solutions so smooth they could double as butter.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-white">
          Outside of coding, I enjoy exploring creative pursuits like blogging, organizing events, and inspiring others to reach their potential. If you’re ready to turn "What ifs" into "Wow, that’s genius," let’s connect!
        </p>

        {/* Social Media Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start">
          <a
            href="https://linkedin.com/in/praneetha-potharaju"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold border border-white hover:bg-white hover:text-black mb-4 sm:mb-0"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Praneetha1844"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold border border-white hover:bg-white hover:text-black mb-4 sm:mb-0"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right Photo */}
      <div className="w-full flex justify-center items-center mt-8 lg:mt-0 lg:mr-64">
        <img
          src="/doi.jpg"
          alt="Praneetha Potharaju"
          className="rounded-full object-cover shadow-lg w-48 h-48 lg:w-64 lg:h-64"
        />
      </div>
    </div>
  );
}

export default AboutMe;
