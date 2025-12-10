function About(){
  return (
    <div id="about">
      <h1>Welcome to Casa Bencita</h1>
      <p>
        Casa Bencita is a peaceful retreat surrounded by rice fields and nature, perfect for families, couples, and solo travelers seeking tranquility and connection with the natural world.
      </p>
      <div className="main-content">
        <div className="text-content">
          <h3>A Serene Escape from the City</h3>
          <br />
          <p>
            Casa Bencita is a boutique hotel located in the scenic town of Tanay, Rizal. Surrounded by lush rice fields 
            and breathtaking mountain views, our property offers the perfect sanctuary for those seeking peace, privacy, 
            and connection with nature.
          </p>
          <br />
          <p>
            Whether you're planning a family getaway, a romantic retreat, or a solo adventure, 
            Casa Bencita provides a warm and welcoming atmosphere with modern amenities to ensure your comfort throughout your stay.
          </p>
          <br />
          <p>
            Wake up to the sounds of birds chirping, enjoy a refreshing swim in our pool, 
            gather around the bonfire under the stars, and create memories that will last a lifetime.
          </p>
        </div>
        <div className="img-content">
          <img src="/image/outside.avif" alt="" />
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <i className="bi bi-tree"></i>
          </div>
          <p>Private & Serene Environment</p>
          <p>
            Escape the hustle and bustle in our secluded paradise
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <i className="bi bi-stars"></i>
          </div>
          <p>Nature Views & Relaxing Atmosphere</p>
          <p>
            Wake up to breathtaking views of rice fields and mountains
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <i className="bi bi-people"></i>
          </div>
          <p>Family Friendly</p>
          <p>
            Perfect for families, couples, and solo travelers
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <i className="bi bi-house-check"></i>
          </div>
          <p>Premium Amenities</p>
          <p>
            Pool, bonfire area, and family-friendly spaces for your comfort
          </p>
        </div>
      </div>
    </div>
  )
}

 export default About;