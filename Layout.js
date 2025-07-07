import React, { createContext, useState, useRef, useContext } from 'react';

const AudioContext = createContext(null);
export const useAudio = () => useContext(AudioContext);

function AudioProvider({ children }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const musicRef = useRef(null);
  const songRef = useRef(null);

  const toggleMusic = () => setIsMusicPlaying(prev => !prev);
  
  // This function pauses one audio element while another plays
  const managePlayback = (primaryRef, secondaryRef) => {
    if (primaryRef.current.paused) {
      if (!secondaryRef.current.paused) {
        secondaryRef.current.pause();
      }
      primaryRef.current.play();
    } else {
      primaryRef.current.pause();
    }
  };
  
  const playLetterSound = (playAction) => {
    const wasMusicPlaying = isMusicPlaying && !musicRef.current.paused;
    const wasSongPlaying = !songRef.current.paused;

    if (wasMusicPlaying) musicRef.current.pause();
    if (wasSongPlaying) songRef.current.pause();
    
    playAction(() => {
        if (wasMusicPlaying) musicRef.current.play();
        if (wasSongPlaying) songRef.current.play();
    });
  };

  const value = {
    isMusicPlaying,
    toggleMusic,
    musicRef,
    songRef,
    managePlayback,
    playLetterSound,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export default function Layout({ children }) {
  return (
    <AudioProvider>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-pink-50 to-yellow-50">
        <style jsx>{`
          /* ... existing styles ... */
        `}</style>
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* ... existing decorative divs ... */}
        </div>
        <main className="relative z-10">{children}</main>
      </div>
    </AudioProvider>
  );
}
