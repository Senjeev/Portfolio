import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://getform.io/f/bqonqkzb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset(); // Clear form on success
        
        // REVERT LOGIC: Wait 3 seconds, then reset button back to normal
        setTimeout(() => {
          setStatus(""); 
        }, 3000);

      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-32 pb-10"
    >
      <div className="max-w-screen-2xl p-4 md:px-16 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Header */}
        <div className="pb-12 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
              Contact Me
            </span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/20 -z-10 -skew-x-12 rounded-sm"></span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg sm:text-xl font-light max-w-2xl leading-relaxed mx-auto md:mx-0">
            Submit the form below or reach out directly to discuss potential opportunities.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="flex flex-col gap-8 justify-center animate-fadeIn">
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-200">Email</h3>
                <p className="text-gray-400 text-sm sm:text-base">senjeevganesan77@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-200">Phone</h3>
                <p className="text-gray-400 text-sm sm:text-base">+91 88707 05569</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-200">Location</h3>
                <p className="text-gray-400 text-sm sm:text-base">Avinashi, Tiruppur</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full bg-gray-900/40 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="my-4 p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                required
              />
              
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here..."
                className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200 resize-none"
                required
              ></textarea>

              <button 
                disabled={status === "sending" || status === "success"}
                className={`text-white px-8 py-4 my-6 rounded-xl shadow-lg flex items-center justify-center gap-2 font-bold text-lg transition-all duration-300 
                  ${
                    status === "success" 
                      ? "bg-green-600 cursor-default" 
                    : status === "error"
                      ? "bg-red-600 hover:bg-red-500 hover:shadow-red-500/40 hover:scale-[1.02]"
                    : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-500/40 hover:scale-[1.02]"
                  }`}
              >
                {status === "sending" ? (
                  "Sending..." 
                ) : status === "success" ? (
                  "Message Sent!" 
                ) : status === "error" ? (
                  <>Failed - Retry? <FaExclamationCircle size={18} /></>
                ) : (
                  <>Let's Talk <FaPaperPlane size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;