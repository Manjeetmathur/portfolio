import React from "react";
import { Link } from "react-router-dom";

const Temp1Posts = ({ post }) => {
       return (
              <div className="p- ">
                     <div className="h-[425px] w-[280px] flex justify-centre 
                            flex-col items-center border-[3px] m-auto rounded-lg ">
                     <h1 className="p-2 text-xl font-bold font-mono  ">{post.postTitle}</h1>
                     <Link to={`${post.link}`}>
                            <img
                                   src={`${post?.postImage?.imageUrl}`}
                                   alt=""
                                   className="h-[300px]"
                            />

                     </Link>
                     <h2 className="p-2 text-sm">{post.postDescription.slice(0, 85)}...</h2>
              </div>
              </div>
       );
};

export default Temp1Posts;
