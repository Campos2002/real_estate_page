import React from 'react';
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* Right Side ============================== */}

        <div className="flexColStart hero-left">

          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Descubra<br /> as Melhores Casas
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span>Encontre uma variedade de propriedades que se adequam a você com facilidade</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={20} />
            <input type="text" />
            <button className='button'>Pesquisar</button>
          </div>
        </div>

        {/* Right Side ============================== */}

        <div className="hero-right">

          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>

        </div>


      </div>

    </section>
  )
};

export default Hero;