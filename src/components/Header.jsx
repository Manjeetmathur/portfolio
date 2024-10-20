import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { IoReorderThreeOutline } from "react-icons/io5";
const Header = () => {
  const authstatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="flex justify-end md:hidden bg-[#fffefe] header-text p-8 ">
        <button className="text-4xl"
          onClick={toggleMenu}
          >
            <IoReorderThreeOutline />
          </button>
      </div>
      <div className={`md:block ${
            isOpen ? "block" : "hidden"
            
          } `}>
        <div
          className="flex w-full p-4 px-12 md:py-8 bg-[#fffefe] flex-col md:gap-10 gap-4 md:justify-end md:flex-row"
        >
          <div className="header-text">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="header-text">
            <Link to={"/work"}>Work</Link>
          </div>
         
          
          <div className="header-text">
            <Link to={"/about"}>Contact</Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
