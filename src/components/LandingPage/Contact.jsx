import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [selectedInterest, setSelectedInterest] = useState("Website Development");

  const handleInterestClick = (interest) => {
    setSelectedInterest(interest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-4 py-16 gap-16">
      <div className="p-10 rounded-xl w-full flex items-start justify-center">
        <div className="flex-1">
          <h1 className="text-5xl font-medium mb-8">
            Let's talk
            <br />
            about something <span className="text-blue-600">great</span>
            <br />
            together
          </h1>

          {/* Moved Interest Buttons */}
          <div className="mb-12">
            <p className="text-blue-600 mb-4 font-medium">I'm interested in:</p>
            <div className="flex flex-wrap gap-3">
              {["Website Development", "App Dev", "Web App", "Brochure", "Social Media Marketing"].map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestClick(interest)}
                  className={`px-4 py-2 text-sm rounded-full border border-gray-300 transition-all duration-300 ${
                    selectedInterest === interest
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "hover:bg-blue-50 hover:border-blue-200"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 mt-12">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" size={24} />
              <span>info@frenchfryfeatures.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" size={24} />
              <span>+7752865124</span>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-blue-600 mb-2">Your name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full p-3 border-b border-gray-300 focus:border-blue-600 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-blue-600 mb-2">Your email</label>
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full p-3 border-b border-gray-300 focus:border-blue-600 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-blue-600 mb-2">Your message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 outline-none transition-colors"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;