import React from 'react';
import BearIcon from './icons/BearIcon';

const SuccessCard: React.FC = () => {
  return (
    <div className="bg-white/90 p-8 md:p-12 rounded-[20px] shadow-2xl max-w-[90%] w-[400px] z-10 text-center animate-bounce-in">
      <div className="flex justify-center mb-6">
        <BearIcon className="w-[150px] h-[150px] animate-heartbeat text-valentine-pink" fill="#ff4d6d" />
      </div>
      
      <div className="success-content">
        <h2 className="font-dancing text-valentine-pink text-5xl mb-4">Yay!!! 💖</h2>
        <p className="text-gray-600 text-xl font-nunito">
          I knew you'd say yes! Can't wait!
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;