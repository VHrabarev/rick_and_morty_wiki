import { Box, Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import { useState } from "react";
import RegisterInfoForm from "./Forms/RegisterInfoForm.jsx";
import AdditionalInfoForm from "./Forms/AdditionalInfoForm.jsx";
import CreateProfileForm from "./Forms/CreateProfileForm.jsx";

const Register = function(props) {
    const {register} = props;
    let userDefault = {
        email: "",
        password: "",
        passwordRepeat: "",
    };
    const [activeStep, setActiveStep] = useState(0);
    const [newUser, setNewUser] = useState(userDefault);

    const optional = <Typography variant="caption">Optional</Typography>;
    const forms = [
        <RegisterInfoForm newUser={newUser} setNewUser={setNewUser} />,
        <AdditionalInfoForm newUser={newUser} setNewUser={setNewUser} />,
        <CreateProfileForm newUser={newUser} />,
    ];
    const handleBack = () => {
        if(activeStep > 0) {
            setActiveStep(activeStep - 1);
        };
    };
    const handleNext = () => {
        if(activeStep < forms.length - 1) {
            setActiveStep(activeStep + 1);
        };
        if(activeStep === forms.length - 1) {
            register({email: newUser.email, password: newUser.password});
        };
    };

    return (
        <Box component="section">
            <Typography component="h2" variant="h5" sx={{ textAlign: "center", mb: 2 }}>Register form</Typography>
            <Stepper activeStep={activeStep} sx={{ mb: 2 }}>
                <Step>
                    <StepLabel>Register info</StepLabel>
                </Step>
                <Step>
                    <StepLabel optional={optional}>Additional info</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Create profile</StepLabel>
                </Step>
            </Stepper>
            <Box sx={{ maxWidth: "450px", m: "0 auto 16px" }}>
                {forms[activeStep]}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    onClick={handleNext}
                >
                    {activeStep === forms.length - 1 ? "Register" : "Next"}
                </Button>
            </Box>
        </Box>
    );
};

export default Register;