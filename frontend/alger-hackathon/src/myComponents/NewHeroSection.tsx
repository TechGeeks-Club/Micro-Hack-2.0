import React from "react";
import Logo from "../assets/react.svg"

export default function NewHeroSection() {
  return (
    <div className="flex items-center justify-center w-[100%] h-[600px] ">
      <div className="flex items-center justify-between w-[800px] h-[400px] bg-gradient-to-r from-bluenormal via-bluelight to-bluenormal rounded-md p-[20px]">
        <div className="flex items-center justify-start font-bold w-[350px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam
          nulla dolor? Unde similique, dolorum recusandae, accusamus magnam
          quasi optio quibusdam velit blanditiis libero repellat ea architecto
          commodi facilis cumque.
        </div>
        <img src={Logo} className="w-[300px] h-[300px]" />
      
     
      </div>
    </div>
  );
}
