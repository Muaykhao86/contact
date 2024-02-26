"use client";
import React from 'react';
import './hero.css';
import { Background } from '@/app/components/Images/Background';
import { Stars } from '../Images/Stars';
import { useRouter } from 'next/navigation'
// import ThreeScene from './ThreeScene';

export const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <div className="hero-container">
      <div className="hero-sky">
        <div className="stars-container">
          <Stars />
        </div>
      </div>
      <div className="hero-content">
        <div className='hero-moon'>
          <button
            className="hero-button"
            onClick={() => router.push('/form')}>Contact Me</button>
        </div>
        <div className='hero-title-container'>
          <h1 className="hero-title">Daniel Hardiman</h1>
        </div>
        <div className="hero-subtitle-container">
          <h2 className="hero-subtitle change text-neon"></h2>
          <h2 className="hero-subtitle"> Developer</h2>
        </div>
      </div>
      <div className="hero-bg">
        <Background />
      </div>

      {/* <ThreeScene /> */}
    </div>
  );
}