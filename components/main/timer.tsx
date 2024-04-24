import React, { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-04") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center items-center  ">
      <div className="grid grid-flow-col md:gap-20 gap-7 text-center auto-cols-max">
        <div className="flex flex-col p-4 bg-neutral rounded-box text-2xl md:text-5xl  text-white text-neutral-content">
          <span className="countdown font-mono md:text-9xl text-3xl">
            <span style={{ '--value': timeLeft.days } as any}>{timeLeft.days}</span>
          </span>
          days
        </div>
        <div className="flex flex-col p-4 text-2xl md:text-5xl bg-neutral rounded-box text-white text-neutral-content ">
          <span className="countdown font-mono md:text-9xl text-3xl">
            <span style={{ '--value': timeLeft.hours } as any}>{timeLeft.hours}</span>
          </span>
          hrs
        </div>
        <div className="flex flex-col p-4 text-2xl md:text-5xl bg-neutral rounded-box text-white text-neutral-content">
          <span className="countdown font-mono md:text-9xl text-3xl">
            <span style={{ '--value': timeLeft.minutes } as any}>{timeLeft.minutes}</span>
          </span>
          min
        </div>
        <div className="flex flex-col p-4 bg-neutral text-2xl md:text-5xl rounded-box text-white text-neutral-content">
          <span className="countdown font-mono md:text-9xl text-3xl">
            <span style={{ '--value': timeLeft.seconds } as any}>{timeLeft.seconds}</span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;
