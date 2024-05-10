import React, { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 20,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 20000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

function Welcome() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);

    const timer = setTimeout(() => {
      setIsActive(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-container">
      <p className="celebration-text"> 🎉 Welcome, hooray! You have made it. You have successfully used your first Docker. 🎉 </p>      <Confetti active={isActive} config={config} />
    </div>
  );
}

export default Welcome;
