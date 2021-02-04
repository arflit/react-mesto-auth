import React from 'react'; 

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  



  return (
    <li key={props.card._id} className="card">
    <img src={props.card.link} className="card__image button" alt={props.card.name} onClick={handleClick} />
    <div className="card__alt">
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__like-container">
        <button className="card__like button" type="button"></button>
        <p className="card__like-number">{props.card.likes.length}</p>
      </div>
    </div>
    <button type="button" className="card__trash-button  card__trash-button_hidden button"></button>
  </li>
  )
}

export default Card;