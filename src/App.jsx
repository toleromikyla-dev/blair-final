import { useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Admire from "./components/Admire";
import Wondering from "./components/Wondering";
import Letter from "./components/Letter";
import Court from "./components/Court";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  const [started, setStarted] = useState(false);

  const audioRef = useRef(null);

  const startWebsite = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
      }
    } catch (err) {
      console.error("Audio failed to play:", err);
    }

    setStarted(true);
  };

  return (
    <>
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/music/bawatdaan.mp3"
        loop
        preload="auto"
      />

      {/* Intro */}
      {!started && <Intro onStart={startWebsite} />}

      {/* Website */}
      <Navbar />
      <Hero />
      <Why />
      <Admire />
      <Wondering />
      <Letter />
      <Court />
      <Footer />
    </>
  );
}

export default App;