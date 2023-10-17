import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CardList from './components/CardList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [basket, setBasket] = useState([]);

  const addToBasket = (article) => {
    const newBasket = basket.slice();
    newBasket.push(article);
    setBasket(newBasket);
  }
    
  const categories = [
    'Toutes les catégories',
    'Électronique',
    'Accessoires',
    'Informatique',
    'Audio',
    'Jeux vidéo',
    'Livres',
    'Vêtements',
    'Cuisine',
    'Jeux',
    'Maison et Jardin',
    'Voyage',
  ];

  return (
    <div>
      <Navbar basket={basket}/>
      <div>
        {categories.map((category, index) => (
          <button key={index} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <CardList selectedCategory={selectedCategory} addToBasket={addToBasket} />
      <Footer />
    </div>
  );
}

export default App
