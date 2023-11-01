import React from 'react'
import "./../styles/Card.css"

function Card(props) {
    const {card}=props;
    // console.log(card);
  return (
    <div className="card">
    {/* <div className="card-image">
      <img src={imageUrl} alt={title} />
    </div> */}
    <div className="card-content">
      <h2 className="card-title">{card.Name}</h2>
      <p className="card-author">Author: {card.Author}</p>
      <p className="card-price">Price: ${card.Price}</p>
      <p className="card-description">{card.Year}</p>
    </div>
  </div>
  )
}

export default Card