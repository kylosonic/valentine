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
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    if (noBtnRef.current) {
      const btnRect = noBtnRef.current.getBoundingClientRect();
      const maxWidth = window.innerWidth - btnRect.width;
      const maxHeight = window.innerHeight - btnRect.height;

      const randomX = Math.floor(Math.random() * maxWidth);
      const randomY = Math.floor(Math.random() * maxHeight);

      setNoBtnState({
        position: 'fixed',
        left: randomX,
        top: randomY,
      });

      const texts = ["No", "Are you sure?", "Try again!", "Nope!", "Can't catch me!", "Really?", "Think again!"];
      setNoBtnText(texts[Math.floor(Math.random() * texts.length)]);
    }
  };

  return (
    <div className="relative bg-white/90 p-8 md:p-12 rounded-[20px] shadow-2xl max-w-[90%] w-[400px] z-10 text-center transition-transform hover:-translate-y-1">
      <div className="flex justify-center mb-6">
        <BearIcon className="w-[150px] h-[150px] animate-heartbeat text-valentine-light" fill="#ff8fa3" />
      </div>

      <h1 className="font-dancing text-valentine-pink text-5xl md:text-[3.5rem] mb-4 drop-shadow-sm">
        Will you be my Valentine?
      </h1>
      <p className="text-gray-600 text-lg mb-8 font-nunito">
        It would make me the happiest person in the world!
      </p>

      <div className="flex justify-center gap-5 mt-2 h-[60px] relative">
        <button
          onClick={onYes}
          className="bg-valentine-pink text-white px-8 py-3 text-xl font-bold rounded-full transition-all duration-300 shadow-md hover:bg-valentine-hover hover:scale-110 hover:shadow-lg font-nunito"
        >
          Yes! 💖
        </button>

        <button
          ref={noBtnRef}
          onMouseEnter={moveButton}
          onTouchStart={(e) => {
             e.preventDefault(); // Prevent touch click on mobile
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
            zIndex: 50, // Ensure it floats above other things when moving
          }}
          className="bg-gray-200 text-gray-600 px-8 py-3 text-xl font-bold rounded-full transition-all duration-300 shadow-md font-nunito whitespace-nowrap"
        >
          {noBtnText}
        </button>
      </div>
    </div>
  );
};

export default ValentineCard;