import data from '../../data/data.json'
import React from 'react';
import './Card.css'

function Card({ article }) {
  return (
    <div className="card">
      <img src={article.image} alt={article.title} />
      <p>{article.title}</p>
      <p>{article.description}</p>
      <p>${article.price}</p>
      <p>Category: {article.category}</p>
      <button>Ajouter au panier</button>
    </div>
  );
}

export default Card;
