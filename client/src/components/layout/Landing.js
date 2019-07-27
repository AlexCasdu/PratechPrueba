import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Perfiles</h1>
          <p className='lead'>Pruebas técnicas Pratech / Desarrollo / REACT</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Registrar
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
