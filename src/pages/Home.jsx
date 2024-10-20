import React, { useState } from "react";

import Container from "../Container";
import ImgContent from "./Home/ImgContent";
import Posts from "./Home/Posts";
import Works from "./Home/Works";

const Home = () => {

  return (
    <div className="">
      <Container>
       
        <div className="fade">
          <ImgContent/>
          <Posts/>
          <Works/>
        </div>
      </Container>
    </div>
  );
};

export default Home;
