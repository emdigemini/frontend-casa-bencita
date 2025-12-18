import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/BookingContext";

function Hero(){
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const { openBooking } = useContext(BookingContext);

  const img = [
    '/image/main-bg.jpg',
    '/image/main-bg1.avif',
    '/image/main-bg2.avif'
  ];

  useEffect(() => {
    const slideShow = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % img.length);
        setFade(true);
      }, 100);
    }, 4100);

    return () => clearInterval(slideShow);
  }, []);


  return (
    <div id="hero">
      <div className="background-img">
        <img 
          className={fade ? "show" : ""}
          src={img[index]}
          alt="" />
      </div>
      <div className="overlay">
        <h1>
          Relax, Unwind, and Connect with Nature at Casa Bencita
        </h1>
        <p>Your peaceful retreat in Tanay, Rizal</p>
        <button onClick={() => openBooking()}>Book Your Stay</button>
      </div>
      <div className="arrow">
        <i className="bi bi-arrow-down-short"></i>
      </div>
    </div>
  )
}

export default Hero;