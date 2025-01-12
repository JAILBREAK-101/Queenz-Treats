import React, { useState } from "react";
import "../../../styles/panel-stepper.css";
import { TiTick } from "react-icons/ti";

/*
TODOS:

Maintain State for Each Step: Track whether each step is completed using state variables.
Use these variables to control the flow between steps.

Async Function Handling: Implement async functions for video upload, subtitle generation, and subtitle download.
After each async function, update the state to reflect whether the operation was successful or if there were any errors.

Conditional Rendering: Conditionally render the components for each step based on the current state.
*/

const PanelStepper = ({ steps, currStep, setCurrStep, complete, setComplete}) => {
  // const [currentStep, setCurrentStep] = useState(currStep);
  // const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex mt-4 justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currStep === i + 1 && "active"} ${
              (i + 1 < currStep || complete) && "complete"
            } `}
          >
            <div className="step bg-gradient-to-l from-theme-black to-theme-gray">
              {i + 1 < currStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>

      {/* Steps should be determined by the process asynchronously */}
      {/* {!complete && (
        <Button
          btnClass="primary"
          onClick={() => {
            currStep === steps.length
              ? setComplete(true)
              : useStepperContext()?.setActiveStep;
          } }
          body={currStep === steps.length ? "Finish" : "Next"} 
          loading={false} 
          disabled={false} 
          size={""}        />
      )} */}
    </>
  );
};

export { PanelStepper };