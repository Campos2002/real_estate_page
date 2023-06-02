import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="">Residências</a>
          <a href="">Valores</a>
          <a href="">Venda</a>
          <a href="">Alguel</a>
          <button className='button'>
            <a href="">Contato</a>
          </button>
        </div>
      </div>
    </section>
  )
};

export default Header;