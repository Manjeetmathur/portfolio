import React from "react";
import p1 from "../../images/p1.jpg";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
const ImgContent = () => {
  return (
    <div className="slide-left ">
      <div className="p-10 bg-[#fffefe] flex items-center flex-col  md:flex-row-reverse md:justify-center md:gap-32 ">
        <div className="w-[300px] my-2">
          <img src={p1} alt="" className="rounded-full" />
        </div>
        <div className="my-6 flex items-center flex-col">
          <div className="my-4">
            <h1 className="text-2xl mx-6 md:text-4xl">
              <b>Hii , I'm Manjeet </b>
            </h1>
            <h2 className="text-xl md:text-3xl my-4">
              <b>A Full Stack Web Developer</b>
            </h2>
          </div>
          <div className=" w-[80vw] md:w-[50vw] text-xl">
            <p>
              Hii, I'm Manjeet currently pursuing Bachelor degree in Computer
              science (BCA) . Currently I'm learning C || C++ || DSA || HTML ||
              CSS || JS || React || Node.js || MongoDb || Python || DBMS || SQL
              || OS. I strongly believe in learning and learning better and so
              I'm a good learner. that makes me better
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fffefe] flex place-content-center pb-8">
        <button className="btn">Download Resume</button>
      </div>
      <div className="bg-[#fffefe] flex place-content-center gap-5 pb-8">
        <a href="" className="btn text-2xl">
        <CiLinkedin />
        </a>
        <a href="https://github.com/Manjeetmathur" className="btn text-2xl">
        <FaGithub />
        </a>
        <a href="" className="btn text-2xl">
        <FaInstagram />
        </a>
        <a href="" className="btn text-2xl">
        <CiFacebook />
        </a>
      </div>
    </div>
  );
};

export default ImgContent;
