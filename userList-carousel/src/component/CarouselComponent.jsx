//why us and testimonial page
import React, { useRef, useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import '../App.css';

const CarouselComponent = () => {
  const options = {
    loop: false,
    margin: 5,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const videoRef = useRef(null);

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

  return (
    <OwlCarousel className="container owl-theme" {...options}>
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
          <video ref={videoRef} className="video-player" autoPlay loop muted>
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
                <img src="data:image/jpeg;base64,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" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
            </div>
            <div className="name" >
                <p style={{marginBottom:"-1rem",fontSize:"15px",wordSpacing:"2px"}}>Adi Singh</p>
                <p style={{marginBottom:"-1rem",fontSize:"12px",wordSpacing:"2px"}}>userList user </p>
            </div>
        </div>
      </div>
      
        
      
    </OwlCarousel>
  );
};

export default CarouselComponent;
