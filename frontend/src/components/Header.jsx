import { useState, useEffect, useContext, useRef } from "react";
import { BookingContext } from "../context/BookingContext";

function Header(){
  const [ scrollY, setScrollY ] = useState(0);
  const { openBooking } = useContext(BookingContext);
  const scroll = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);
    }

    if (scrollY > 50) {
      scroll.current.classList.add('scroll');
    } else {
      scroll.current.classList.remove('scroll');
    }

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollY])

  const navTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ block: 'center' });
    }
  }

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Location', id: 'location' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header ref={scroll}>
      <span onClick={() => navTo('hero')}>
        Casa Bencita
      </span>
      <nav>
        {navLinks.map(link => {
          return (
            <button 
              key={link.id}
              onClick={() => navTo(link.id)}
            >
              {link.name}
            </button>
          )
        })}
      </nav>
      <button onClick={() => openBooking()}>Book Now</button>
    </header>
  )
}

export default Header;