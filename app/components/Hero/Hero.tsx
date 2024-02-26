import React from 'react';
import './hero.css';
import { Background } from '@/app/components/Images/Background';
import { Stars } from '../Images/Stars';
// import ThreeScene from './ThreeScene';

export const Hero: React.FC = () => {
  return (
    <div className="hero-wrap">
      <div className="hero-container">
        <div className="hero-sky">
          <div className='hero-moon'></div>
          <div className="stars-container">
            <Stars />
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Daniel Hardiman</h1>
          <div className="hero-subtitle-container">
            <h2 className="hero-subtitle change"></h2>
            <h2 className="hero-subtitle"> Developer</h2>
          </div>
        </div>
        <div className="hero-bg">
          <Background />
        </div>

        {/* <ThreeScene /> */}
      </div>
    </div>
  );
}