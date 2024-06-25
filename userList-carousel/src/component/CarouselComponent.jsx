import React, { useRef, useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import '../App.css';

const CarouselComponent = () => {
  const options = {
    loop: false,
    margin: 5,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
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
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item white text">
        <h2>Why US</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
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
        <p style={{color:"gray"}}>Indias No1 Brand</p>
        <p style={{color:"gray"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat."</p>
        </div>
        <div className="profile">
            <div className="image">
                <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
            </div>
            <div className="name" >
                <p style={{marginBottom:"-1.2rem"}}>Mahesh Singh</p>
                <p>userList's user since 2024</p>
            </div>
        </div>
      </div>
      <div className="item beige1 text">
        <div>
        <h3>Business Name</h3>
        <p style={{color:"gray"}}>Indias No1 Brand</p>
        <p style={{color:"gray"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat."</p>
        </div>
        <div className="profile">
            <div className="image">
                <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
            </div>
            <div className="name" >
                <p style={{marginBottom:"-1.2rem"}}>Mahesh Singh</p>
                <p>userList's user since 2024</p>
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
        <p style={{color:"gray"}}>Indias No1 Brand</p>
        <p style={{color:"gray"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat."</p>
        </div>
        <div className="profile">
            <div className="image">
                <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
            </div>
            <div className="name" >
                <p style={{marginBottom:"-1.2rem"}}>Mahesh Singh</p>
                <p>userList's user since 2024</p>
            </div>
        </div>
      </div>
      <div className="item beige1 text">
        <div>
        <h3>Business Name</h3>
        <p style={{color:"gray"}}>Indias No1 Brand</p>
        <p style={{color:"gray"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span style={{ color: "blue" }}>dolore magna aliqua</span>. Ut enim ad minim veniam, quis nostrud <span style={{ color: "blue" }}>dolore magna aliqua</span> nisi ut aliquip ex ea commodo consequat."</p>
        </div>
        <div className="profile">
            <div className="image">
                <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
            </div>
            <div className="name" >
                <p style={{marginBottom:"-1.2rem"}}>Mahesh Singh</p>
                <p>userList's user since 2024</p>
            </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default CarouselComponent;
