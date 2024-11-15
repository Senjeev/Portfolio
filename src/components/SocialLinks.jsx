import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/senjeev-g77/",
      style:"rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Senjeev",
      
    },
    {
      id: 3,
      child: (
        <>
          Email <MdAttachEmail size={30} />
        </>
      ),
      href: "mailto:senjeevganesan77@gmail.com",
      
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./Software_.pdf",
       style:"rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={" bg-gray-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500"+" "+ link.style}
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={link.href}
              download={link.download}
              target="_blank"
            >
              {link.child}
            </a>
          </li>
          ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
