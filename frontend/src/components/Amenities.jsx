function Amenities(){
  const cards = [
    {
      id: 0,
      img: '/image/poolside.avif', 
      name: 'Clean Pool', 
      desc: 'Refreshing pool surrounded by lush greenery for total privacy and relaxation.'
    }, {
      id: 1,
      img: '/image/bonfire.avif', 
      name: 'Bonfire Area', 
      desc: 'Perfect outdoor bonfire spot for cozy nights under the stars.'
    }, {
      id: 2,
      img: '/image/chillspot.jpg', 
      name: 'Nature Surroundings', 
      desc: 'Immerse yourself in peaceful rice fields and natural beauty.'
    }, {
      id: 3,
      img: '/image/poolside.avif', 
      name: 'In-house Restaurant', 
      desc: 'Delicious, affordable homecooked meals prepared with love.'
    },  
  ];

  const descOffer = [
    {icon: "bi bi-wifi", name: "Fast wifi - 75 Mbps", id: 0},
    {icon: "bi bi-car-front", name: "Free parking on premises", id: 1},
    {icon: "fa fa-paw", name: "Pets allowed", id: 2},
    {icon: "bi bi-thermometer-snow", name: "AC - split type ductless system", id: 3},
    {icon: "fa-solid fa-person-swimming", name: "Private pool", id: 4},
    {icon: "bi bi-shield-check", name: "Exterior security cameras on property", id: 5},
  ];

  return (
    <div id="amenities">
      <div className="header">
        <h1>Amenitites & <span>Features</span></h1>
        <p>Everything you need for a comfortable and memorable stay.</p>
      </div>

      <div className="cards">
        {cards.map(card => {
          return (
            <div key={card.id} className="card">
              <img src={card.img} alt={card.name} />
              <div className="text-overlay">
                <h2>{card.name}</h2>
                <p>{card.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="desc">
        {descOffer.map(desc => (
          <div key={desc.id} className="desc-offer">
            <i className={desc.icon}></i>
            <p>{desc.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Amenities;