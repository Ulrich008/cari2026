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
          minHeight: '200px',
          width: '92%',
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Contenu du compte à rebours */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full py-8 px-4">
          {/* Conteneur principal du compteur */}
          <div className="flex flex-col items-center justify-center w-full max-w-5xl">
            {/* Ligne avec chiffres et séparateurs alignés */}
            <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 w-full">
              {/* Jours */}
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tabular-nums">
                  {formatTime(timeLeft.days)}
                </div>
                <div className="text-yellow-400 font-bold text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">
                  Day
                </div>
              </div>
              
              {/* Séparateur 1 */}
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none self-start pt-0">
                :
              </div>
              
              {/* Heures */}
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tabular-nums">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">
                  Heure
                </div>
              </div>
              
              {/* Séparateur 2 */}
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none self-start pt-0">
                :
              </div>
              
              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tabular-nums">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-yellow-400 font-bold text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">
                  Minute
                </div>
              </div>
              
              {/* Séparateur 3 */}
              <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none self-start pt-0">
                :
              </div>
              
              {/* Secondes */}
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tabular-nums">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2">
                  Seconde
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;