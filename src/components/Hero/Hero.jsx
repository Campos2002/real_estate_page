import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

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
            <span className='secondaryText'>Encontre uma variedade de propriedades que se adequam a você com facilidade</span>
            <span className='secondaryText'>Esqueça todas as dificuldades em encontrar uma residência para você
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={20} />
            <input type="text" />
            <button className='button'>Pesquisar</button>
          </div>

          <div className="flexCenter stats">

            <div className="flexColCenter stat">
              <span><CountUp start={88000} end={90000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Casas e Apartamentos</span>
            </div>

            <div className="flexColCenter stat">
              <span><CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Clientes Satisfeitos</span>
            </div>

            <div className="flexColCenter stat">
              <span><CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Prêmios pelo Mundo</span>
            </div>

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