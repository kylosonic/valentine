import React from 'react';
import BearIcon from './icons/BearIcon';

const SuccessCard: React.FC = () => {
  return (
    <div className="bg-white/95 p-10 md:p-14 rounded-[30px] shadow-[0_20px_60px_rgba(255,77,109,0.4)] max-w-[95%] w-[450px] z-10 text-center animate-bounce-in border-4 border-valentine-light/30">
      <div className="flex justify-center mb-6 relative">
        <BearIcon className="w-[160px] h-[160px] animate-heartbeat" fill="#ff4d6d" />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl animate-ping opacity-50">❤️</span>
        </div>
      </div>
      
      <div className="success-content">
        <h2 className="font-dancing text-valentine-pink text-6xl mb-4">Yay!!! 🥰</h2>
        <p className="text-valentine-pink text-3xl font-dancing font-bold mb-4">
          I love you Nani!
        </p>
        <p className="text-gray-500 text-lg font-nunito">
          I'm the luckiest person in the world! <br/>
          I can't wait to spend it with you! 🌹
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;