// pages/events.js
"use client";
import React from 'react';
import Home1 from '../pages/page';
import ParticlesComponent from "@/components/main/particles";

const EventsPage = () => {
  return (
    <div className=''>
    
    <ParticlesComponent id="particles" />
      <Home1/>
      {/* Your event-related content */}
    </div>
  );
};

export default EventsPage;
