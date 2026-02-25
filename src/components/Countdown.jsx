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
    <div className="w-full px-2 sm:px-4">
      <div
        id="countdown"
        className="relative rounded-xl sm:rounded-2xl overflow-hidden w-full mx-auto"
        style={{
          backgroundImage: 'url(/assets/sofitel.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '180px',
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Contenu du compte à rebours */}
        <div className="relative z-10 flex items-center justify-center min-h-[180px] sm:min-h-[200px] py-6 sm:py-8 px-2 sm:px-4">
          {/* Conteneur principal du compteur */}
          <div className="w-full max-w-5xl">
            {/* Ligne avec chiffres et séparateurs alignés */}
            <div className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {/* Jours */}
              <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px] md:min-w-[90px]">
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tabular-nums">
                  {formatTime(timeLeft.days)}
                </div>
                <div className="text-yellow-400 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-center mt-1 sm:mt-2 whitespace-nowrap">
                  Day
                </div>
              </div>
              
              {/* Séparateur 1 */}
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none pb-3 sm:pb-4 md:pb-5">
                :
              </div>
              
              {/* Heures */}
              <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px] md:min-w-[90px]">
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tabular-nums">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-white font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-center mt-1 sm:mt-2 whitespace-nowrap">
                  Heure
                </div>
              </div>
              
              {/* Séparateur 2 */}
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none pb-3 sm:pb-4 md:pb-5">
                :
              </div>
              
              {/* Minutes */}
              <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px] md:min-w-[90px]">
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tabular-nums">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-yellow-400 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-center mt-1 sm:mt-2 whitespace-nowrap">
                  Minute
                </div>
              </div>
              
              {/* Séparateur 3 */}
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none pb-3 sm:pb-4 md:pb-5">
                :
              </div>
              
              {/* Secondes */}
              <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px] md:min-w-[90px]">
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tabular-nums">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-white font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-center mt-1 sm:mt-2 whitespace-nowrap">
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