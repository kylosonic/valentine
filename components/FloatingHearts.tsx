import React, { useEffect, useState } from 'react';

interface HeartStyle {
  id: number;
  left: string;
  fontSize: string;
  animationDuration: string;
  animationDelay: string;
  color: string;
  opacity: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartStyle[]>([]);

  useEffect(() => {
    const heartCount = 30; // More hearts for more cuteness
    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#ffccd5'];
    const newHearts: HeartStyle[] = [];

    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100 + 'vw',
        fontSize: Math.random() * 25 + 15 + 'px',
        animationDuration: Math.random() * 4 + 4 + 's',
        animationDelay: Math.random() * 10 + 's',
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-10%] animate-float select-none"
          style={{
            left: heart.left,
            fontSize: heart.fontSize,
            color: heart.color,
            opacity: heart.opacity,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
          }}
        >
          {Math.random() > 0.5 ? '❤️' : '💖'}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;