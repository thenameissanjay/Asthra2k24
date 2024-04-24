import React from 'react';
import TrackVisibility from "react-on-screen";

const College: React.FC = () => {
  return (
    <div className="hero mt-20 mx-2"> {/* Added mt-20 for top margin and mx-4 for left and right margin */}
    <div className="hero-content flex-col lg:flex-row gap-4"> {/* Added gap-4 for space between children */}
     
      <img src="./logoastra.jpg" className=" h-auto rounded-lg shadow-2xl" />

      <div>
        <h2 className="text-4xl font-bold">About Asthra</h2>
        <p className="py-6">Asthra is a national level technical symposium held annually in our college. It is wholly organised and co-ordinated by our students and supported by the management and staff of Information Technology. Asthra is a stepping stone for students to showcase their technical expertise and talent on a grand stage..</p>
      </div>
    </div>
  </div>
  );
};

export default College;
