import React from "react";

const Hero = ({ data }) => {
  return (
    <div className="hero--bg">
      <div className="hero">
        <div className="intro">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
        <img src={data.picture} alt="img hero" />
      </div>
    </div>
  );
};

export default Hero;
