import React, { useState, useRef } from 'react';
import BearIcon from './icons/BearIcon';

interface ValentineCardProps {
  onYes: () => void;
}

const ValentineCard: React.FC<ValentineCardProps> = ({ onYes }) => {
  const [noBtnState, setNoBtnState] = useState<{
    top: string | number;
    left: string | number;
    position: 'static' | 'fixed';
  }>({
    top: 'auto',
    left: 'auto',
    position: 'static',
  });
  
  const [noBtnText, setNoBtnText] = useState("No");
  const [pleadingIndex, setPleadingIndex] = useState(0);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const pleadingMessages = [
    "No",
    "Are you sure, Nani?",
    "Nani, please? 🥺",
    "Don't do this to me! 💔",
    "I'll be so sad...",
    "Pretty please? ✨",
    "I'll give you all the hugs!",
    "Think of the puppies! 🐶",
    "You're breaking my heart! 😭",
    "Just click Yes, Nani! 💕"
  ];

  const moveButton = () => {
    if (noBtnRef.current) {
      const btnRect = noBtnRef.current.getBoundingClientRect();
      const maxWidth = window.innerWidth - btnRect.width - 20;
      const maxHeight = window.innerHeight - btnRect.height - 20;

      const randomX = Math.max(10, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(10, Math.floor(Math.random() * maxHeight));

      setNoBtnState({
        position: 'fixed',
        left: randomX,
        top: randomY,
      });

      const nextIndex = (pleadingIndex + 1) % pleadingMessages.length;
      setPleadingIndex(nextIndex);
      setNoBtnText(pleadingMessages[nextIndex]);
    }
  };

  return (
    <div className="relative bg-white/95 p-8 md:p-12 rounded-[30px] shadow-[0_20px_50px_rgba(255,77,109,0.3)] max-w-[95%] w-[450px] z-10 text-center border-4 border-valentine-light/20">
      <div className="flex justify-center mb-6">
        <div className="relative">
           <BearIcon className="w-[140px] h-[140px] animate-heartbeat" fill="#ff4d6d" />
           <span className="absolute -top-2 -right-2 text-3xl animate-bounce">✨</span>
           <span className="absolute -bottom-2 -left-2 text-3xl animate-pulse">🌸</span>
        </div>
      </div>

      <h1 className="font-dancing text-valentine-pink text-5xl md:text-6xl mb-2 drop-shadow-sm">
        Hey Nani...
      </h1>
      <h2 className="font-dancing text-valentine-pink text-4xl md:text-5xl mb-6">
        Will you be my Valentine?
      </h2>
      
      <p className="text-valentine-pink/80 text-xl mb-8 font-nunito font-bold italic">
        I love you so, so much! ❤️
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-2 h-[80px] relative">
        <button
          onClick={onYes}
          className="bg-valentine-pink text-white px-10 py-4 text-2xl font-black rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(255,77,109,0.4)] hover:bg-valentine-hover hover:scale-125 hover:rotate-3 font-nunito z-20"
        >
          YES! 💖
        </button>

        <button
          ref={noBtnRef}
          onMouseEnter={moveButton}
          onTouchStart={(e) => {
             e.preventDefault();
             moveButton();
          }}
          onClick={(e) => {
              e.preventDefault();
              moveButton();
          }}
          style={{
            position: noBtnState.position,
            top: noBtnState.top,
            left: noBtnState.left,
            zIndex: 50,
          }}
          className="bg-rose-50 text-rose-400 border-2 border-rose-100 px-6 py-3 text-lg font-bold rounded-full transition-all duration-200 shadow-sm font-nunito whitespace-nowrap min-w-[100px]"
        >
          {noBtnText}
        </button>
      </div>
    </div>
  );
};

export default ValentineCard;