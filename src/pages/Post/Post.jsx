import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div>
      <div className="bg-[#aee8f9] py-6 slide-right">
        <div className="text-4xl flex place-content-center mb-6 ">
          Recent Posts
        </div>
        <div className="md:flex md:place-content-center">
          <div className="bg-[#fffefe] m-4 md:w-[30vw]  rounded-xl">
            <div className="m-6 p-5 flex flex-col items-center hover:scale-[95%] ">
              <h1 className="text-2xl font-bold mb-6">
                Making A Backend Project from scratch
              </h1>
              <p className="mb-6">01-01-2024 | Development</p>
              <p className="mb-6">
                Backend Project or Api's for youtube like platform Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Unde architecto
                illum nisi autem culpa libero quia impedit, exercitationem
                incidunt officiis.
              </p>
            </div>
          </div>
          <div className="bg-[#fffefe] m-4 md:w-[30vw]  rounded-xl">
            <div className="m-6 p-5 flex flex-col items-center ">
              <h1 className="text-2xl font-bold mb-6">
                Making A Backend Project from scratch
              </h1>
              <p className="mb-6">01-01-2024 | Development</p>
              <p className="mb-6">
                Backend Project or Api's for youtube like platform Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Unde architecto
                illum nisi autem culpa libero quia impedit, exercitationem
                incidunt officiis.
              </p>
            </div>
          </div>
          <div className="bg-[#fffefe] m-4 md:w-[30vw] rounded-xl">
            <div className="m-6 p-5 flex flex-col items-center ">
              <h1 className="text-2xl font-bold mb-6">
                Making A Backend Project from scratch
              </h1>
              <p className="mb-6">01-01-2024 | Development</p>
              <p className="mb-6">
                Backend Project or Api's for youtube like platform Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Unde architecto
                illum nisi autem culpa libero quia impedit, exercitationem
                incidunt officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
