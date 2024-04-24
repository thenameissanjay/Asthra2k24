import React, { useState, useEffect } from 'react';
const getHeight = () => {
  if (window.innerWidth <= 768) {
    return "100px";
  } else {
    return "200px";
  }
};
export function Stat() {
  const [downloads, setDownloads] = useState(0);
  const [users, setUsers] = useState(0);
  const [newRegisters, setNewRegisters] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      const startDownloads = 0;
      const endDownloads = 1500;
      const startUsers = 0;
      const endUsers =6;
      const startNewRegisters = 0;
      const endNewRegisters = 4;
      const duration = 20000; // Animation duration in milliseconds
      const interval = 50; // Interval between updates

      const downloadsIncrement = Math.ceil((endDownloads - startDownloads) / (duration / interval));
      const usersIncrement = Math.ceil((endUsers - startUsers) / (duration / interval));
      const newRegistersIncrement = Math.ceil((endNewRegisters - startNewRegisters) / (duration / interval));

      let currentDownloads = startDownloads;
      let currentUsers = startUsers;
      let currentNewRegisters = startNewRegisters;

      const downloadsTimer = setInterval(() => {
        currentDownloads += downloadsIncrement;
        if (currentDownloads >= endDownloads) {
          clearInterval(downloadsTimer);
          currentDownloads = endDownloads;
        }
        setDownloads(currentDownloads);
      }, interval);

      const usersTimer = setInterval(() => {
        currentUsers += usersIncrement;
        if (currentUsers >= endUsers) {
          clearInterval(usersTimer);
          currentUsers = endUsers;
        }
        setUsers(currentUsers);
      }, interval);

      const newRegistersTimer = setInterval(() => {
        currentNewRegisters += newRegistersIncrement;
        if (currentNewRegisters >= endNewRegisters) {
          clearInterval(newRegistersTimer);
          currentNewRegisters = endNewRegisters;
        }
        setNewRegisters(currentNewRegisters);
      }, interval);
    };

    animateNumbers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center">
<div className="stats shadow md:w-full md:w-11/12 lg:w-10/12 xl:w-9/12 h-200 md:h-200" style={{height:getHeight()}} >
        <div className="stat place-items-center">
          <div className="stat-title text-lg lg:text-3xl">Registrations</div>
          <div className="stat-value text-xl lg:text-4xl">{downloads.toLocaleString()}+</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title text-lg lg:text-3xl">Tech Events</div>
          <div className="stat-value text-xl lg:text-4xl">{users.toLocaleString()}</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title text-lg lg:text-3xl">Non-Tech Events</div>
          <div className="stat-value text-xl lg:text-4xl">{newRegisters.toLocaleString()}+1</div>
        </div>
      
      </div>
    </div>
  );
  
  
  
}
