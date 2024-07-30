import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white">
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 ">
          <p className="font-bold text-4xl inline border-b-4  border-gray-500">
            Contact
          </p>
          <p className="py-6">Get in touch with me....</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/bqonqkzb"  method="POST" className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name..."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email..."
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea  name="Message"
              rows="10"
              placeholder="Enter Your Message..."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
           
            <button className=" text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-b from-cyan-700 to-blue-500 hover:scale-110 duration-300 ">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
