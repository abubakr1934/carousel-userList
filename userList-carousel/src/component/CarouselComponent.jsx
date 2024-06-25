import React, { useRef, useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import '../App.css';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";

const CarouselComponent = () => {
  const options = {
    // loop: true,
    margin: 5,
    nav: false, 
    // autoplay:2000,
    responsive: {
      0: {
        items: 1,
        slideBy:1,
        
      },
      600: {
        slideBy: 3,
        items: 2
      },
      1000: {
        slideBy: 3,
        items: 3
      }
    }
  };

  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const videoRef = useRef(null);
  const carouselRef = useRef(null); // Ref for the carousel

  useEffect(() => {
    const video = videoRef.current;

    const handleAutoplay = () => {
      if (video) {
        video.play()
          .then(() => {
            console.log('Autoplay started');
          })
          .catch((error) => {
            console.error('Autoplay failed: ', error);
          });
      }
    };

    const handleStartAutoplay = () => {
      setAutoplayEnabled(true);
      handleAutoplay();
    };

    if (autoplayEnabled) {
      handleAutoplay();
    }

    return () => {

    };
  }, [autoplayEnabled]);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Move to the next item
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Move to the previous item
    }
  };

  return (
    <div className="container d-flex justify-content-center" style={{backgroundColor:"#D8EFD3"}}>

    <div className="carousel-container">
      <button className="custom-nav-btn left-btn" onClick={handlePrev} style={{marginLeft:"-35px"}}> 
      <GrPrevious className="icon" />
    </button>
      <OwlCarousel ref={carouselRef} className="container owl-theme" {...options}>
        <div className="item white text">
          <h2 style={{marginLeft:"10px"}}>Why Us</h2>
          <div>
            <p style={{margin:"10px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{margin:"10px"}}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="item beige">
          <div className="video-container">
            <video ref={videoRef} className="video-player" autoPlay loop muted >
              <source src="https://framerusercontent.com/assets/G2yBZMqqu24MCAO7T8rvVHbUII.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="item beige1 text">
          <div>
          <h3>Business Name</h3>
          <p style={{color:"gray"}}>India's No1 Brand</p>
          <p style={{color:"gray"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat."</p>
          </div>
          <div className="profile">
              <div className="image">
                  <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
              </div>
              <div className="name" >
                  <p style={{marginBottom:"-1rem",fontSize:"15px",wordSpacing:"2px"}}>Mahesh Singh</p>
                  <p style={{marginBottom:"-1rem",fontSize:"12px",wordSpacing:"2px"}}>userList user </p>
              </div>
          </div>
        </div>
        <div className="item beige1 text">
          <div>
          <h3>Business Name</h3>
          <p style={{color:"gray"}}>India's No1 Brand</p>
          <p style={{color:"gray"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat."</p>
          </div>
          <div className="profile">
              <div className="image">
                  <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
              </div>
              <div className="name" >
                  <p style={{marginBottom:"-1rem",fontSize:"15px",wordSpacing:"2px"}}>Ankit Agarwal</p>
                  <p style={{marginBottom:"-1rem",fontSize:"12px",wordSpacing:"2px"}}>userList user </p>
              </div>
          </div>
        </div>
        <div className="item beige">
          <div className="video-container">
            <video ref={videoRef} className="video-player" autoPlay loop muted>
              <source src="https://framerusercontent.com/assets/GaKS6zRVP5tXegPfBirbR3g04.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="item beige1 text">
          <div>
          <h3>Business Name</h3>
          <p style={{color:"gray"}}>India's No1 Brand</p>
          <p style={{color:"gray"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat."</p>
          </div>
          <div className="profile">
              <div className="image">
                  <img src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}} />
              </div>
              <div className="name" >
                  <p style={{marginBottom:"-1rem",fontSize:"15px",wordSpacing:"2px"}}>Adi Singh</p>
                  <p style={{marginBottom:"-1rem",fontSize:"12px",wordSpacing:"2px"}}>userList user </p>
              </div>
          </div>
        </div>
      </OwlCarousel>
      <button className="custom-nav-btn right-btn" onClick={handleNext}><MdOutlineNavigateNext  style={{scale:"2",marginRight:"-10px"}}/></button>
    </div>
    </div>
  );
};

export default CarouselComponent;
