import { Box, TextField, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RegisterInfoForm = function(props) {
    const {newUser, setNewUser} = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

    const saveUserEmail = (e) => {
        setNewUser({...newUser, email: e.target.value});
    };
    const saveUserPassword = (e) => {
        setNewUser({...newUser, password: e.target.value});
    };
    const saveUserPasswordRepeat = (e) => {
        setNewUser({...newUser, passwordRepeat: e.target.value});
    };
    const endAdornmentPassword = 
        <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
        </InputAdornment>;

    const endAdornmentPasswordRepeat = 
        <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                    edge="end"
                >
                    {showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
                </IconButton>
        </InputAdornment>;

    return (
        <Box>
            <TextField 
                label="E-mail"
                variant="outlined"
                sx={{ width: "100%", mb: 2 }}
                autoFocus
                onChange={saveUserEmail}
            />
            <FormControl variant="outlined" sx={{ width: "100%", mb: 2 }}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={endAdornmentPassword}
                    label="Password"
                    onChange={saveUserPassword}
                />
            </FormControl>
            <FormControl variant="outlined" sx={{ width: "100%", mb: 2 }}>
                <InputLabel htmlFor="outlined-adornment-password-repeat">Password repeat</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password-repeat"
                    type={showPasswordRepeat ? 'text' : 'password'}
                    endAdornment={endAdornmentPasswordRepeat}
                    label="Password repeat"
                    onChange={saveUserPasswordRepeat}
                />
            </FormControl>
        </Box>
    );
};

export default RegisterInfoForm;