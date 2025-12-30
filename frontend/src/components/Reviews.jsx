import { useState, useRef, useEffect } from "react";

function Reviews(){
  const [ toggleWriteReviewModal, setToggleWriteReviewModal ] = useState(false);

  const reviews = [
    {
      name: 'Queenie Castle',
      date: 'November 2025',
      ratings: '5',
      content: "We had such a relaxing stay at Casa Bencita... peaceful escape surrounded by nature... rice fields right outside the room... cozy modern spaces... bonfire area perfect for nights... clean pool with greenery for total privacy... warm hosts... delicious affordable homecooked meals... Perfect for families and small groups. We'll definitely be back!"
    }, {
      name: 'Samantha Gayle',
      date: 'October 2025',
      ratings: '5',
      content: "The place was clean, peaceful, and exactly as described in the listing. We loved how spacious the area was — perfect for relaxing, swimming, and spending time with family and friends. The host was also very kind, responsive, and made sure we had everything we needed throughout our stay. If you're looking for a private and comfortable getaway, this place is highly recommended. Definitely worth every penny and we'd love to book again in the future!"
    }, {
      name: 'Mischele Sta. Ana',
      date: 'June 2025',
      ratings: '5',
      content: `I have no idea about the one star reviews below but I think they mistaken this place to be somewhere else! This place is legit! Newly constructed private villa with a pool near the main town of Tanay. Owner is very responsive and very hands on. If you want privacy and a very relaxing place, this place is for you.`
    }, {
      name: 'JC R',
      date: 'May 2024',
      ratings: '4.5',
      content: "We had an absolutely wonderful stay here at Casa Bencita! The 2-room setup was perfect for our family, offering both comfort and privacy. The pool was clean, well-maintained, and a hit with both the kids and adults. Evenings by the bonfire were a highlight—cozy, relaxing, and a great way to bond under the stars. Had some smores with the kiddos! The resort staff and the owner were friendly and accommodating, making sure we had everything we needed for a smooth and memorable experience. Highly recommended for families looking for a peaceful and fun escape!"
    },
  ]

  return (
    <div id="reviews">
      <div className="header">
        <h1>Guest Reviews</h1>
        <div className="counts">
          <img src={`/star-rating/5-star.png`} alt="" />
          <p>4.9</p>
          <span>(22 reviews)</span>
        </div>
        <p>See what our guests have to say about their experience at Casa Bencita.</p>
      </div>
      <div className="main-content">
        <div className="cards">
          {reviews.map(card => {
            return (
              <div key={card.content} className="card">
                <div className="info-header">
                  <div className="info">
                    <p className="name">{card.name}</p>
                    <p className="date">{card.date}</p>
                  </div>
                  <div className="stars">
                    <img src={`/star-rating/${card.ratings}-star.png`} alt="" />
                  </div>
                </div>
                <div className="text-content">
                  {card.content}
                </div>
              </div>
            )
          })}
        </div>
        <button onClick={() => setToggleWriteReviewModal(true)}>
          <i className="bi bi-pen"></i>
          Write a review
        </button>
        <a href="">View all reviews</a>
      </div>

      {toggleWriteReviewModal && <WriteReviewModal toggleWriteReviewModal={toggleWriteReviewModal} setToggleWriteReviewModal={setToggleWriteReviewModal} /> }
    </div>
  )
}

function WriteReviewModal({ toggleWriteReviewModal, setToggleWriteReviewModal }){
  const autoResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="modal-overlay"
      onClick={() => setToggleWriteReviewModal(false)}
    >
      <div className="review-box"
        onClick={e => e.stopPropagation()}
      >
        <div onClick={() => setToggleWriteReviewModal(false)} className="close-btn">
          <i className="bi bi-x"></i>
        </div>
        <h2>Write a Review</h2>
        <form action="">
          <div className="input-box">
            <label htmlFor="name">Full Name *</label>
            <input id="name" type="text" required />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email *</label>
            <input id="email" type="text" required />
          </div>
          <div className="input-box">
            <label htmlFor="writeReview">Review *</label>
            <div className="write-review-box">
              <textarea name="" id="writeReview"
                onInput={autoResize}
              >
                {/* Text Here */}
              </textarea>
              <div className="prev-media">
                <img src="/bedroom/room-0.avif" alt="" draggable={false} />
                <img src="/bedroom/room-1.avif" alt="" draggable={false} />
                <img src="/bedroom/room-2.avif" alt="" draggable={false} />
                <img src="/bedroom/room-3.avif" alt="" draggable={false} />
                <img src="/bedroom/room-4.avif" alt="" draggable={false} />
              </div>
            </div>
            <AddPhoto />
            <StarButton />
            <SendButton />
          </div>
        </form>
      </div>
    </div>
  )
}

function SendButton(){
  return (
    <button type="submit" className="send-btn">
      Post Review
    </button>
  )
}

function StarButton(){
  const [starsArray, setStarsArray] = useState([
    { id: 1, select: false },
    { id: 2, select: false },
    { id: 3, select: false },
    { id: 4, select: false },
    { id: 5, select: false },
  ]);


  const selectStar = (id) => {
    setStarsArray(prev =>
      prev.map(star => ({
        ...star,
        select: star.id <= id,
      }))
    );
  }

  return (
    <div className="star-button">
      {starsArray.map((star) => (
        <i key={star.id} onClick={() => selectStar(star.id)} className={`bi bi-star${star.select ? '-fill' : ''}`}></i>
      ))}
    </div>
  )
}

function AddPhoto(){
  const plusStyle = () => {
    return {
      position: 'absolute',
      top: '4px',
      right: '3px',
      fontSize: '12px',
    }
  }

  return (
    <div className="add-media-btn">
      <p>Add Media</p>
      <i className="bi bi-plus"
        style={plusStyle()}
      ></i>
      <i className="bi bi-collection" 
        style={{
          fontSize: '18px'
        }}
      ></i>
    </div>
  )
}

function ReviewsBox(){
  return (
    <>
      <p>hi</p>
    </>
  )
}

export default Reviews;