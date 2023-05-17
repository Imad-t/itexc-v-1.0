import React, { useState } from "react";

import styles from "../styles/Stepper.module.scss";

const FormStepper = ({ steps, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <form className={styles.formStepper} onSubmit={(event) => { event.preventDefault(); onSubmit(event); }} > 
      <div className={styles.pages}>
        {steps?.map((_step, index) => (
          <span className={currentStep === index ? styles.selected : ""}></span>
        ))}
      </div>

      <div className={styles.steps}>{steps[currentStep]}</div>

      <div className={styles.pagination}>
        {currentStep !== 0 ? (
          <button onClick={(event) => {
            event.preventDefault();
            setCurrentStep(currentStep - 1);
            }}>
              Back</button>
        ) : null}

        {currentStep !== steps?.length - 1 ? (
          <button onClick={(event) => {
            event.preventDefault();
            setCurrentStep(currentStep + 1);}}>
              Next</button>
        ) : null}
        {currentStep === steps?.length - 1 ? (
          <button type="submit" >
            Submit
          </button>
        ) : null}
      </div>
    </form>
  );
};
export default FormStepper;
