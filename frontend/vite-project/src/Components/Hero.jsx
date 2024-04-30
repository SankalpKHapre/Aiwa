import React, { useState, useEffect } from 'react';
import img from '../assets/weighbridge-manufacturers.jpg';
import img2 from '../assets/pitless-type-weighbridge.jpg';
import img3 from '../assets/portable-weighbrdige.jpg';
import './Hero.css';

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex(prevIndex => {
        if (prevIndex === 3) {
          return 1; // Reset to the first slide if currently on the last slide
        } else {
          return prevIndex + 1; // Increment slide index
        }
      });
    }, 2000); // Interval of 2 seconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "block";
  };

  return (
      <section className="bg-white flex flex-row m-5 p-20 ">
        <div className="w-[50%]">
          <h1 className="text-3xl text-center m-5 font-bold">AIWA - WEIGHBRIDGE MANUFACTURERS</h1>
          <p className="m-5 ml-[15%] text-xl pl-5 w-[60%] text-base/loose text-left">AIWA Group is engaged in the manufacture, sales and after-sales service of electronic weighing systems and solutions through its channel partners spread throughout India.
            Established in 1994, AIWA has distinguished itself as a premier organization having successfully executed many prestigious, state of the art projects for various industries in India as well as abroad. AIWA products are a result of trail-blazing research & development and stringent quality checks which make them conform to all international quality standard</p>
        </div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src={img} style={{ width: "100%" }} alt="Product 1" />
          </div>
          <div className="mySlides fade">
            <img src={img2} style={{ width: "100%" }} alt="Product 2" />
          </div>
          <div className="mySlides fade">
            <img src={img3} style={{ width: "100%" }} alt="Product 3" />
          </div>
        </div>
      </section>

  );
};

export default Hero;
