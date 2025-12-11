function Location(){
  return (
    <div id="location">
      <div className="header">
        <h1>Find Us</h1>
        <p>Located in the heart of Tanay, Rizal, surrounded by nature.</p>
      </div>
      <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.6738046705404!2d121.29783807603822!3d14.503405779447002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397eb00475cc3af%3A0x3c1544b71c5a8b6e!2sCasa%20Bencita!5e0!3m2!1sen!2sph!4v1765284884912!5m2!1sen!2sph" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="text-content">
          <div className="map-info-side">
            <div className="icon">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="map-info">
              <p>Casa Bencita</p>
              <span>G832+957, Tanay, Rizal</span>
              <span>Under 3 hours from Manila, near town proper</span>
            </div>
          </div>
          <button
            onClick={() => window.open('https://www.google.com/maps/dir//Casa+Bencita,+Tanay,+Rizal/@14.4919138,121.2969669,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3397eb00475cc3af:0x3c1544b71c5a8b6e!2m2!1d121.3004049!2d14.5034031?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D')}
          ><i className="bi bi-arrow-90deg-right"></i> Get Directions</button>
        </div>
      </div>
    </div>
  )
}

export default Location;