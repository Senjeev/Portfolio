import React from 'react';

const About = () => {
  return (
    <div name="about" className=" w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className=" max-w-screen-lg  container mx-auto flex flex-col justify-center h-full px-4 md:px-0">
        <div className="mt-20 sm:mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-10">
          I'm Senjeev G from Avinashi, a dedicated computer science enthusiast with a strong foundation in both web development and data science. I completed my schooling at Bannari Amman Vidya Niketan in the CS-Math group in 2020, and I am currently in my fifth year of an MSc in Decision and Computing Science at CIT. My journey into programming began with basic HTML, CSS, and PHP, leading to the development of an e-Sevai clone project. Over time, I have gained a fundamental understanding of programming languages such as C, Python, and Java, with a robust grasp of C++. My passion for web development led me to independently learn full-stack development, culminating in the creation of a MERN stack expense tracker project.
        </p>
        <br />
        <p className="text-xl">
          In the data science stream, I have developed a basic understanding of machine learning algorithms and have worked on various predictive models, including a text classification project and a performance-based recruitment prediction model using decision trees and Naive Bayes algorithms. I am proficient in using tools like Power BI for data visualization, VSCode for programming, Jupyter Notebook for Python-based model development, and Postman for API testing during full-stack development. My diverse skill set and continuous drive for learning enable me to tackle complex problems and deliver innovative solutions. Feel free to reach out to me for collaboration or any queries at [Your Email Address] or connect with me on [LinkedIn/Other Social Media Platforms].
        </p>
      </div>
    </div>
  );
}

export default About;
