import React, { useState } from 'react';
import StepIndicator from './StepIndicator';

const Step = () => {
   const [currentStep, setCurrentStep] = useState(1);
   const totalSteps = 4;

   return (
      <div className="p-8 space-y-4">
         <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
         <div className="space-x-2">
            <button
               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
               onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            >
               Previous
            </button>
            <button
               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
               onClick={() =>
                  setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
               }
            >
               Next
            </button>
         </div>
      </div>
   );
};

export default Step;
