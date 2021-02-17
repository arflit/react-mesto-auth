import React from 'react';

function Card(props) {
  const { card, onCardClick } = props;
  const { name, link, likes } = card;

  function handleClick() {
    onCardClick(card)
  }

  return (
    <li className="card">
      <img
        src={link}
        className="card__image button"
        alt={name}
        onClick={handleClick}
      />
      <div className="card__alt">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-container">
          <button className="card__like button" type="button"></button>
          <p className="card__like-number">{likes.length}</p>
        </div>
      </div>
      <button
        type="button"
        className="card__trash-button  card__trash-button_hidden button"
      ></button>
    </li>
  )
}

export default Card;
