import React from "react";

type SuccessModalProps = {
  onClose: () => void;
  teamName: string;
  selectedDisplayText1: string;
  selectedDisplayText2: string;
  selectedDisplayText3: string;
 concatenatedNames1:string;
 concatenatedNames2:string;
 concatenatedNames3:string;


};

const SuccessModal: React.FC<SuccessModalProps> = ({
  onClose,
  teamName,
  selectedDisplayText1,
  selectedDisplayText2,
  selectedDisplayText3,
  concatenatedNames1,concatenatedNames2,concatenatedNames3,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-black">Registration Successful!</h2>
        <p className="text-gray-700 text-black">
          Your registration has been successfully submitted with the following details:
        </p>
        <div className="mt-4 text-center">
  <p className="text-black font-bold">
    <span className="font-bold ">Team Name:</span> {teamName}
  </p>
  {concatenatedNames1 && (

  <p className="text-black font-bold">
    <span className="font-bold text-black">Event 1:</span> {selectedDisplayText1}
  </p>
  )}

  {concatenatedNames2 && (

  <p className="text-black font-bold">
    <span className="font-bold text-black">Event 2:</span> {selectedDisplayText2}
  </p>
)}

  {concatenatedNames3 && (
    <p className="text-black font-bold">
      <span className="font-bold text-black">Event 3:</span> {selectedDisplayText3}
    </p>
  )}
</div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
