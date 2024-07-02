import React, { useEffect } from "react";
import './Hero.css';
import person from '../../assets/person.png';

const Hero = () => {
  useEffect(() => {
    const hero = document.getElementById("hero");

    if (hero) {
      const links = hero.getElementsByTagName("a");

      for (const link of links) {
        link.onmousemove = (e) => {
          const rect = link.getBoundingClientRect();
          const img = link.querySelector("img");

          if (img) {
            img.style.top = `${e.clientY - rect.top}px`;
            img.style.left = `${e.clientX - rect.left}px`;
          }
        };
      }
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between mt-11">
      <div id="hero" className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <h3 className="col-span-full">
          We are an award-winning creative marketing&nbsp;
        </h3>

        <h3 className="col-span-full">
          Our creative studio manages{" "}
          <a href="">
            print
            <img src="https://sweartaker.ie/wp-content/uploads/2021/02/Covers-Letterbox-v06.jpg" alt="print" />
          </a>{" "}
          +{" "}
          <a href="">
            digital&nbsp;design
            <img src="https://sweartaker.stagingtesting.com/wp-content/uploads/2023/06/vardis-gif.gif" alt="digital design" />
          </a>
          ,{" "}
          <a href="">
            advertising
            <img src="https://sweartaker.ie/wp-content/uploads/2023/02/ad-mockups-v01-1024x797.png" alt="advertising" />
          </a>
          ,{" "}
          <a href="">
            copywriting
            <img src="https://sweartaker.ie/wp-content/uploads/2021/03/Three-Story-35-1024x818.jpg" alt="copywriting" />
          </a>{" "}
          and{" "}
          <a href="">
            branding
            <img src="https://sweartaker.ie/wp-content/uploads/2021/03/SON28490086-1024x683.jpg" alt="branding" />
          </a>
          .
        </h3>

        <h3 className="col-span-full">
          Our communications house looks after{" "}
          <a href="">
            brand&nbsp;+&nbsp;social&nbsp;strategy
            <img src="https://sweartaker.ie/wp-content/uploads/2022/10/3Olympia_Lyra-scaled.jpg" alt="brand and social strategy" />
          </a>
          , integrated{" "}
          <a href="">
            public&nbsp;relations
            <img src="https://sweartaker.ie/wp-content/uploads/2023/06/tesco-summer-gif.gif" alt="public relations" />
          </a>
          ,{" "}
          <a href="https://sweartaker.ie/work/kelloggs-gaa-cul-camps-2020/">
            social&nbsp;media
            <img src="https://sweartaker.ie/wp-content/uploads/2021/02/1905936-1024x647.jpg" alt="social media" />
          </a>{" "}
          and{" "}
          <a href="https://sweartaker.ie/work/playstation-launch-of-the-ps5/">
            influence&nbsp;+&nbsp;advocacy
            <img src="https://sweartaker.ie/wp-content/uploads/2023/06/sony-gif.gif" alt="influence and advocacy" />
          </a>
          .
        </h3>
      </div>
      <div className="flex items-center justify-center md:w-1/2">
        <img src={person} alt="person" className="hidden md:block" />
      </div>
    </div>
  );
};

export default Hero;
