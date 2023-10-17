import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CardList from './components/CardList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(''); // Ajoutez cette ligne

  return (
    <div>
      <Navbar />
      <div>
        <button onClick={() => setSelectedCategory('')}>Toutes les catégories</button>
        <button onClick={() => setSelectedCategory('Électronique')}>Électronique</button>
        <button onClick={() => setSelectedCategory('Accessoires')}>Accessoires</button>
        <button onClick={() => setSelectedCategory('Informatique')}>Informatique</button>
        <button onClick={() => setSelectedCategory('Audio')}>Audio</button>
        <button onClick={() => setSelectedCategory('Jeux vidéo')}>Jeux vidéo</button>
        <button onClick={() => setSelectedCategory('Livres')}>Livres</button>
        <button onClick={() => setSelectedCategory('Vêtements')}>Vêtements</button>
        <button onClick={() => setSelectedCategory('Cuisine')}>Cuisine</button>
        <button onClick={() => setSelectedCategory('Jeux')}>Accessoires</button>
        <button onClick={() => setSelectedCategory('Maison et Jardin')}>Maison et Jardin</button>
        <button onClick={() => setSelectedCategory('Voyage')}>Voyage</button>
      </div>
      </div>
      <CardList selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
}

export default App;
const [selectedCategory, setSelectedCategory] = useState('');