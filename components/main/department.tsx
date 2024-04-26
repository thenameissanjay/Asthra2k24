import React from 'react';
import Link from "next/link";

const Department: React.FC = () => {
  return (
    <div className="hero mt-10 mx-1 w-45"> {/* Added mx-10 for left and right margin */}
      <div className="hero-content flex-col lg:flex-row-reverse gap-7">
        <img src="https://th.bing.com/th/id/OIP.p9jE4FbHEe8VSbpyeWEw3gAAAA?rs=1&pid=ImgDetMain" className=" h-auto rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold text-gray-300">Meenakshi Sundararajan Engineering Clg</h1>
          <p className="py-6 text-gray-300">

          Meenakshi Sundararajan Engineering College (MSEC) was established by the IIET Society in 2001. This institution is a part of the prestigious KRS Group of Institutions which also includes the renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our Founder Late Shri K.R.Sundararajan, the well-known Meenakshi College for Women and the more recently established Meenakshi Sundararajan School of Management. The institutions on the KRS Campus are known for the quality education they impart and their stringent levels of discipline. We have consistently outshone all our peers, not only in academics, but in co-curricular activities as well.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Department;