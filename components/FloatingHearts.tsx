import React, { useEffect, useState } from 'react';

interface HeartStyle {
  id: number;
  left: string;
  fontSize: string;
  animationDuration: string;
  animationDelay: string;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartStyle[]>([]);

  useEffect(() => {
    const heartCount = 15;
    const newHearts: HeartStyle[] = [];

    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100 + 'vw',
        fontSize: Math.random() * 20 + 20 + 'px',
        animationDuration: Math.random() * 3 + 3 + 's',
        animationDelay: Math.random() * 5 + 's',
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute top-[-10%] text-pink-300 opacity-0 animate-float"
          style={{
            left: heart.left,
            fontSize: heart.fontSize,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;