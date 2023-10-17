    import React from 'react';
    import './NavBar.css'

    function Navbar({basket, totalBasketPrice}) {
    return (
        <div className='navbar'>
        <p>Logow</p>
        <p>Amazob</p>
        <p>Articles dans le panier: {basket.length} pour un total de : ${totalBasketPrice}</p>
        </div>
    );
    }

    export default Navbar;
