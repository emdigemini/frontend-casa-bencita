function Footer(){
  return (
    <footer>
      <div className="footer-box">
        <div className="footer-grid">
          <PageLink />
          <QuickNav />
          <ContactUs />
        </div>
        <div className="footer-credits">
          <p>© 2025 Casa Bencita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function PageLink(){
  return (
    <div className="casa">
      <h2>Casa Bencita</h2>
      <p>
        Your private nature retreat in Tanay, Rizal. Modern, cozy, and peacefully surrounded by lush greenery.
      </p>
      <div className="page-link">
        <a href="https://www.facebook.com/profile.php?id=61573568433933" target="_blank" >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://tiktok.com/@casabencita78" target="_blank">
          <i className="bi bi-tiktok"></i>
        </a>
      </div>
    </div>
  )
}

function QuickNav(){
  const navTo = (id) => {
    console.log(id);
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
    <div>
      <h2>Quick Links</h2>
      <ul>
        {navLinks.map(n => {
          return (
            <li key={n.id}
              onClick={() => navTo(n.id)}
            >{n.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

function ContactUs(){
  return (
    <div>
      <h2>Contact Us</h2>
      <div className="contact-us">
        <i className="bi bi-telephone"></i>
        +63 939 666 3374
      </div>
      <div className="contact-us">
        <i className="bi bi-envelope"></i>
        78hiraya@gmail.com
      </div>
      <div className="contact-us">
        <i className="bi bi-geo-alt"></i>
        G832+957, Tanay, Rizal
      </div>
    </div>
  )
}

export default Footer;