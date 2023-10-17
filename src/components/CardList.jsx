import React from 'react';
import Card from './Card';
import data from '../../data/data.json';
import './CardList.css';

function CardList({ selectedCategory, addToBasket }) {
  return (
    <div className="card-list">
      {data
        .filter((article) => !selectedCategory || selectedCategory === 'Toutes les catégories' || article.category === selectedCategory)
        .map((article) => (
          <div className="eachCard" key={article.id}>
            <Card article={article} addToBasket={addToBasket} />
          </div>
        ))}
    </div>
  );
}

export default CardList;
