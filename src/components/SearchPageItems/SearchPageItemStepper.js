import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const steps = ["Select", "Book", "Pay"];
const stepDescriptions = [
  "Select a space flight",
  "Book fill in details",
  "Payment",
];

const SearchPageItemStepper = ({ initialStep }) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  // const handleNext = () => {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed,
  //         // find the first step that has been completed
  //         steps.findIndex((step, i) => !(i in completed))
  //       : activeStep + 1;
  //   setActiveStep(newActiveStep);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  useEffect(() => {
    setActiveStep(initialStep);
  }, [initialStep]);

  return (
    <Box sx={{ width: "90%", paddingTop: "1vh", margin: "0 auto" }}>
      <Typography
        sx={{
          mt: 1,
          mb: 1,
          py: 1,
          px: 1,
          color: "white",
          fontSize: "1.8rem",
        }}
      >
        {stepDescriptions[activeStep]}
      </Typography>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton
              style={{
                // backgroundColor: activeStep === index ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
                // backdropFilter: 'blur(5px)',
                borderBottom:
                  activeStep === index ? "0.15rem solid white" : "none",
              }}
              color={activeStep === index ? "#D9D9D9" : "inherit"}
              onClick={handleStep(index)}
            >
              <Typography color="white">
                {" "}
                {/* Add this */}
                {label}
              </Typography>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography> */}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              <Box sx={{ flex: "1 1 auto" }} />
              {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button> */}
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  {
                    /* <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography> */
                  }
                ) : (
                  <>
                    {/* <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button> */}
                  </>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
SearchPageItemStepper.propTypes = {
  initialStep: PropTypes.number.isRequired,
};
export default SearchPageItemStepper;
