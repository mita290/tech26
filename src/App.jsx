import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef } from 'react';
import './App.css';
import TextBlock from './components/TextBlock';
import TitleCard from './components/TitleCard';
import video from './videos/bg2.mp4';
import theme from './audio/st_theme.mp3';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch()(err => {
          console.log("Autoplay blocked: ", err);
        });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
        document.removeEventListener('click', unlockAudio);
      }
    };

    document.addEventListener('click', unlockAudio);
  }, []);

  return (
    <div className="App">

      <audio ref={audioRef} src={theme} loop />

      <Parallax pages={4.3} style={{ top: '0', left: '0'}} class="animation">
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
        <ParallaxLayer offset={0} speed={0.40}>
          <TitleCard />
        </ParallaxLayer>
        <ParallaxLayer offset={0.999999} speed={0.50}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;