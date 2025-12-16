import { Fragment, useEffect, useRef, useState } from "react";

function Gallery(){
  const [ nav, setNav ] = useState([
    {name: 'All', id: 'all', active: true},
    {name: 'Videos', id: 'videos', active: false},
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
  const currentVid = useRef(null);

  const photos = [
    /* Videos */
    {id: 'videos', file:'/videos/video-0.mp4'},
    {id: 'videos', file:'/videos/video-1.mp4'},
    {id: 'videos', file:'/videos/video-2.mp4'},
    /* Rooms */
    {id: 'rooms', file: '/bedroom/room-6.avif'},
    {id: 'rooms', file: '/bedroom/room-2.avif'},
    {id: 'rooms', file: '/bedroom/room-3.avif'},
    {id: 'rooms', file: '/bedroom/room-4.avif'},
    {id: 'rooms', file: '/bedroom/room-5.jpeg'},
    {id: 'rooms', file: '/bedroom/room-8.avif'},
    {id: 'rooms', file: '/bedroom/room-00.avif'},
    {id: 'rooms', file: '/bedroom/room-01.avif'},
    {id: 'rooms', file: '/bathroom/bathroom-0.avif'},
    {id: 'rooms', file: '/bathroom/bathroom-1.avif'},
    {id: 'rooms', file: '/bathroom/bathroom-2.jpeg'},
    {id: 'rooms', file: '/bathroom/bathroom-3.avif'},
    /* Exterior */
    {id: 'exterior', file: '/exterior/exterior0.avif'},
    {id: 'exterior', file: '/exterior/exterior1.avif'},
    {id: 'exterior', file: '/exterior/exterior2.avif'},
    {id: 'exterior', file: '/exterior/exterior3.avif'},
    {id: 'exterior', file: '/exterior/exterior4.avif'},
    {id: 'exterior', file: '/exterior/exterior5.avif'},
    {id: 'exterior', file: '/exterior/exterior6.avif'},
    /* Amenities */
    {id: 'amenities', file: '/amenities/amenities0.avif'},
    {id: 'amenities', file: '/amenities/amenities1.avif'},
    {id: 'amenities', file: '/amenities/amenities2.avif'},
    {id: 'amenities', file: '/amenities/amenities3.avif'},
    {id: 'amenities', file: '/amenities/amenities4.avif'},
    {id: 'amenities', file: '/amenities/amenities5.avif'},
    {id: 'amenities', file: '/amenities/amenities6.avif'},
    {id: 'amenities', file: '/amenities/amenities7.avif'},
    {id: 'amenities', file: '/amenities/amenities8.avif'},
    {id: 'amenities', file: '/amenities/amenities9.avif'},
    {id: 'amenities', file: '/amenities/amenities10.avif'},
    {id: 'amenities', file: '/amenities/amenities11.avif'},
    {id: 'amenities', file: '/amenities/amenities12.avif'},
    {id: 'amenities', file: '/amenities/amenities13.avif'},
  ];

  const filteredPhotos = photos.filter(p => p.id === filter || filter === 'all');

  const playVid = (vid) => {
    if(currentVid.current && currentVid.current !== vid){
      currentVid.current.pause();
    } 
    currentVid.current = vid;
  }

  return (
    <>
      <div className="file-container">
        {filteredPhotos.map((p, i) => (
          <Fragment key={`${p.file}-${i}`}>
          {p.id === 'videos' 
              ? 
              <div
                key={`${p.file}-${i}`} 
                onPlay={(e) => playVid(e.target)}
                className="prev-video"
              >
                <video ref={currentVid} src={p.file}
                controls></video>
              </div>
              :
              <div
                className="prev-img"
                onClick={() => setPreviewSrc(p.file)}
              >
              <img src={p.file} alt={p.id} />
            </div>
            }
          </Fragment>
        ))}
      </div>

    {previewSrc && (
      <div className="preview-modal" onClick={() => setPreviewSrc(null)}>
        <div className="file-container">
          <img src={previewSrc} alt="Preview" />
        </div>
      </div>
    )}
  </>
  );
}


export default Gallery;
