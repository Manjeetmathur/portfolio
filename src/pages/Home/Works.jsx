import React from "react";
import p2 from "../../images/p2.png"
import { Link } from "react-router-dom";
const Works = () => {
  return (
    <div className="slide-top">
      <div className="text-4xl flex place-content-center m-6">
        Featured Work
      </div>
      <div className="md:flex md:place-content-center">
      <div className="bg-[#aee8f9] m-4 md:w-[30vw] hover:scale-[97%] rounded-xl">
        <div className="h-[150px]">
          <a href="">
            <img src={p2} alt="" className="h-[180px] w-[500px] " />
          </a>
        </div>
        <div className="m-6 p-5 flex flex-col items-center ">
          <h1 className="text-2xl font-bold mb-6">
            Making A Backend Project from scratch
          </h1>
          <p className="mb-6">01-01-2024 | Development</p>
          <p className="mb-6">
            Backend Project or Api's for youtube like platform Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Unde architecto illum nisi
            autem culpa libero quia impedit, exercitationem incidunt officiis.
          </p>
        </div>
      </div>
      <div className="bg-[#aee8f9] m-4 md:w-[30vw] hover:scale-[97%]  rounded-xl">
      <div className="h-[150px]">
          <a href="">
            <img src={p2} alt="" className="h-[180px] w-[500px] " />
          </a>
        </div>
        <div className="m-6 p-5 flex flex-col items-center ">
          <h1 className="text-2xl font-bold mb-6">
            Making A Backend Project from scratch
          </h1>
          <p className="mb-6">01-01-2024 | Development</p>
          <p className="mb-6">
            Backend Project or Api's for youtube like platform Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Unde architecto illum nisi
            autem culpa libero quia impedit, exercitationem incidunt officiis.
          </p>
        </div>
      </div>
      <div className="bg-[#aee8f9] m-4 md:w-[30vw] hover:scale-[97%]  rounded-xl">
      <div className="h-[150px]">
          <a href="">
            <img src={p2} alt="" className="h-[180px] w-[500px] " />
          </a>
        </div>
        <div className="m-6 p-5 flex flex-col items-center ">
          <h1 className="text-2xl font-bold mb-6">
            Making A Backend Project from scratch
          </h1>
          <p className="mb-6">01-01-2024 | Development</p>
          <p className="mb-6">
            Backend Project or Api's for youtube like platform Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Unde architecto illum nisi
            autem culpa libero quia impedit, exercitationem incidunt officiis.
          </p>
        </div>
      </div>
      </div>
      <div className="font-bold cursor-pointer hover:text-[red] flex place-content-center ">
        <Link to={"/work"}>
          View All Work
        </Link>
      </div>
    </div>
  );
};

export default Works;
