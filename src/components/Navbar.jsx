import React from 'react';
import  './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Champion</a></li>
                <li><a href="#">Carte</a></li>
                <li><a href="#">Favoris</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;