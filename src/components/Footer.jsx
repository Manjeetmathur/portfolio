import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    //bg-red-300 w-full p-5 flex justify-around rounded-lg border-2
    <div className="border-t-4  m-6 p-5 ">
      <div className="text-center flex justify-center gap-6 mb-3">
        <div className="">
          <Logo />
          <p></p>
        </div>
        <div className="">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="">
          <Link to={"/"}>Explore</Link>
        </div>
        <div className="">
          <Link to={"/about"}>About</Link>
        </div>
      </div>
      <div className="md:flex md:justify-around mt-6">
        <div className="m-4">
          <h1>Reach us</h1>
          <p>Email : manjeet@768</p>
          <p>Contact No. : 6287773228</p>
        </div>
        <div className="">
          <p>Copyright © 2024 Manjeet </p>
          <p>Content owned, maintained and updated by Department of Manjeet</p>
          <p>Designed & Developed by : Manjeet</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
