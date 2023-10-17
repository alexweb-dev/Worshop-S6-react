    import React from 'react';
    import './NavBar.css'

    function Navbar({basket}) {
    return (
        <div className='navbar'>
        <p>Logow</p>
        <p>Amazob</p>
        <p>Articles dans le panier: {basket.length}</p>
        </div>
    );
    }

    export default Navbar;
