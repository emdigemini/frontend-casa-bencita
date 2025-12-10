import { useState, useEffect } from "react";

function Header(){
  const [ scrollY, setScrollY ] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);
    }

    if (scrollY > 50) {
      document.documentElement.style.setProperty('--bg-nav', '#fff');
      document.documentElement.style.setProperty('--text-nav', '#575757ff');
      document.documentElement.style.setProperty('--text-casa', '#17966e');
    } else {
      document.documentElement.style.setProperty('--bg-nav', 'rgba(0, 0, 0, 0.25)');
      document.documentElement.style.setProperty('--text-nav', '#fff');
      document.documentElement.style.setProperty('--text-casa', '#fff');
    }

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollY])

  const navTo = (id) => {
    console.log(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ block: 'center' });
    }
  }

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Location', id: 'location' },
    { name: 'Contact', id: 'contact' },
  ]
  return (
    <header>
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
      <button>Book Now</button>
    </header>
  )
}

export default Header;