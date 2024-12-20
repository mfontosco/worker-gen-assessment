import React from "react";

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-2 w-10 rounded-full ${
            index < currentStep ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
