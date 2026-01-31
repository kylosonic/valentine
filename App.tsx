import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Confetti from './components/Confetti';
import ValentineCard from './components/ValentineCard';
import SuccessCard from './components/SuccessCard';

const App: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-valentine-bg font-nunito overflow-hidden">
      {/* Background Layer */}
      <FloatingHearts />
      
      {/* Overlay Layer for Confetti */}
      {isSuccess && <Confetti />}

      {/* Content Layer */}
      <div className="relative z-10">
        {!isSuccess ? (
          <ValentineCard onYes={() => setIsSuccess(true)} />
        ) : (
          <SuccessCard />
        )}
      </div>
    </div>
  );
};

export default App;