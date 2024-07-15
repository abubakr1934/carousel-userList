import React from "react";
import './HeroOption.css';

const HeroOption = () => {
  return (
    <div class="flex flex-wrap mt-10 bgg">
    <div class="w-full sm:w-8/12 mb-10">
      <div class="container mx-auto h-full sm:p-10">
        <nav class="flex px-4 justify-between items-center" style={{marginBottom:"1.5rem"}}>
          <div class="text-4xl font-bold text-white">
          Hi there  
          </div>
          
        </nav>
        <header class="container px-4 lg:flex mt-10 items-center h-fit lg:mt-0 bg">
          <div class="w-full">
            <h1 class=" text-white text-4xl lg:text-6xl font-bold"><span class="header-bg">UserList </span>Discover, Reward, and Review with us!</h1>
            <div class="w-20 h-2 bg-white my-4"></div>
            <p class="text-xl mb-10 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
            <button class="bg-white text-black text-2xl font-medium px-4 py-2 rounded shadow button-hover">Learn More</button>
          </div>
        </header>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
  </div>
  );
};

export default HeroOption;
