import React from 'react';
import Avatar from './assets/default_avatar.jpeg';

const Header = () => {
  return (
    <header className="header">
      <h1>Pong</h1>
      <img src={Avatar} alt="Perfil" />
      
    </header>
  );
};

export default Header;
