import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('October 21, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div 
        className="relative rounded-2xl overflow-hidden w-full"
        style={{
          backgroundImage: 'url(/assets/sofitel.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          width: '90%',
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Contenu du compte à rebours */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full py-8 px-4">
          {/* Chiffres du compte à rebours */}
          <div className="flex items-center gap-2 md:gap-4 mb-4">
            {/* Jours */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {formatTime(timeLeft.days)}
              </div>
            </div>
            
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">:</span>
            
            {/* Heures */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {formatTime(timeLeft.hours)}
              </div>
            </div>
            
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">:</span>
            
            {/* Minutes */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {formatTime(timeLeft.minutes)}
              </div>
            </div>
            
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">:</span>
            
            {/* Secondes */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {formatTime(timeLeft.seconds)}
              </div>
            </div>
          </div>
          
          {/* Labels */}
          <div className="flex items-center justify-center gap-6 md:gap-12 lg:gap-16">
            <div className="text-yellow-400 font-semibold text-sm md:text-base">Day</div>
            <div className="text-yellow-400 font-semibold text-sm md:text-base">Heure</div>
            <div className="text-yellow-400 font-semibold text-sm md:text-base">Minute</div>
            <div className="text-yellow-400 font-semibold text-sm md:text-base">Seconde</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;