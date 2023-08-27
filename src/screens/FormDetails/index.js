import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import WrapperComponent from "../../components/WrapperComponent";
import UserInformation from "./UserInformation";
import AddressDetails from "./AddressDetails";
import UserFinalData from "./UserFinalData";
import { stepsData } from "../../utils";
import "./form-details.css";


const FormDetails = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleSkip = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };

    return (
        <WrapperComponent backgroundColor="#e6e6e6">
            <Box className="mainBox">
                <Stepper alternativeLabel activeStep={activeStep}>
                    {stepsData.map((label, index) => {
                        const stepProps = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {activeStep === 0 && (
                    <UserInformation
                        handleBack={handleBack}
                        handleNext={handleNext}
                        activeStep={activeStep}
                    />
                )}
                {activeStep === 1 && (
                    <AddressDetails
                        handleBack={handleBack}
                        handleNext={handleNext}
                        activeStep={activeStep}
                    />
                )}
                {activeStep === 2 && (<UserFinalData />)}
            </Box>
        </WrapperComponent>
    )
}

export default FormDetails
