import { useEffect, useState } from "react";

function Gallery(){
  const [ nav, setNav ] = useState([
    {name: 'All', id: 'all', active: true},
    {name: 'Rooms', id: 'rooms', active: false},
    {name: 'Exterior', id: 'exterior', active: false},
    {name: 'Amenities', id: 'amenities', active: false},
  ]);

  const handleNavClick = (id) => {
    setNav(nav.map(item => ({
      ...item,
      active: item.id === id 
    })));
  };

  const filter = nav.find(item => item.active)?.id || 'all';

  return (
    <div id="gallery">
      <div className="header">
        <h1>Photo <span>Gallery</span></h1>
        <p>Explore the beauty of Casa Bencita through our collection of photos.</p>
        <nav>
          {nav.map(p => {
            return (
              <button key={p.id}
                onClick={() => handleNavClick(p.id)}
                className={p.active ? "active" : ''}
              >
                {p.name}
              </button>
            )
          })}
        </nav>
      </div>
      <div className="photos">
        <CardContent filter={filter} />
      </div>
    </div>
  )
}

function CardContent({ filter }) {
  const [ previewSrc, setPreviewSrc ] = useState(null);
  const photos = [
    {id: 'rooms', img: '/bedroom/room-6.avif'},
    {id: 'rooms', img: '/bedroom/room-2.avif'},
    {id: 'rooms', img: '/bedroom/room-3.avif'},
    {id: 'rooms', img: '/bedroom/room-4.avif'},
    {id: 'rooms', img: '/bedroom/room-5.jpeg'},
    {id: 'rooms', img: '/bedroom/room-8.avif'},
    {id: 'rooms', img: '/bedroom/room-00.avif'},
    {id: 'rooms', img: '/bedroom/room-01.avif'},
    {id: 'rooms', img: '/bathroom/bathroom-0.avif'},
    {id: 'rooms', img: '/bathroom/bathroom-1.avif'},
    {id: 'rooms', img: '/bathroom/bathroom-2.jpeg'},
    {id: 'rooms', img: '/bathroom/bathroom-3.avif'},
    /* Exterior */
    {id: 'exterior', img: '/exterior/exterior0.avif'},
    {id: 'exterior', img: '/exterior/exterior1.avif'},
    {id: 'exterior', img: '/exterior/exterior2.avif'},
    {id: 'exterior', img: '/exterior/exterior3.avif'},
    {id: 'exterior', img: '/exterior/exterior4.avif'},
    {id: 'exterior', img: '/exterior/exterior5.avif'},
    {id: 'exterior', img: '/exterior/exterior6.avif'},
    /* Amenities */
    {id: 'amenities', img: '/amenities/amenities0.avif'},
    {id: 'amenities', img: '/amenities/amenities1.avif'},
    {id: 'amenities', img: '/amenities/amenities2.avif'},
    {id: 'amenities', img: '/amenities/amenities3.avif'},
    {id: 'amenities', img: '/amenities/amenities4.avif'},
    {id: 'amenities', img: '/amenities/amenities5.avif'},
    {id: 'amenities', img: '/amenities/amenities6.avif'},
    {id: 'amenities', img: '/amenities/amenities7.avif'},
    {id: 'amenities', img: '/amenities/amenities8.avif'},
    {id: 'amenities', img: '/amenities/amenities9.avif'},
    {id: 'amenities', img: '/amenities/amenities10.avif'},
    {id: 'amenities', img: '/amenities/amenities11.avif'},
    {id: 'amenities', img: '/amenities/amenities12.avif'},
    {id: 'amenities', img: '/amenities/amenities13.avif'},
  ];

  const filteredPhotos = photos.filter(p => p.id === filter || filter === 'all');

  return (
    <>
      <div className="img-container">
        {filteredPhotos.map((p, i) => (
          <div
            key={i}
            className="prev-img"
            onClick={() => setPreviewSrc(p.img)}
          >
            <img src={p.img} alt={p.id} />
          </div>
        ))}
      </div>

    {previewSrc && (
      <div className="preview-modal" onClick={() => setPreviewSrc(null)}>
        <div className="img-container">
          <img src={previewSrc} alt="Preview" />
        </div>
      </div>
    )}
  </>
  );
}


export default Gallery;
