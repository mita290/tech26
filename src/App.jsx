import { useState } from 'react';
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import TextBlock from './components/TextBlock';
import TitleCard from './components/TitleCard';
import video from './videos/bg.mp4';

function App() {
  return (
    <div className="App">
      <Parallax pages={4.25} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="bg-video"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <TitleCard />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;