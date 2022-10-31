import { Box, Typography, TextField, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = function() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

    const endAdornmentPassword = 
        <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                >
                    {showPassword? <VisibilityOff /> : <Visibility />}
                </IconButton>
        </InputAdornment>;

    const endAdornmentPasswordRepeat = 
        <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                    edge="end"
                >
                    {showPasswordRepeat? <VisibilityOff /> : <Visibility />}
                </IconButton>
        </InputAdornment>;

    return (
        <Box component="section">
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>Login form</Typography>
            <Box
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <TextField label="E-mail" variant="outlined" sx={{ mb: 2 }} autoFocus /><br />
                <FormControl variant="outlined" sx={{ mb: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={endAdornmentPassword}
                        label="Password"
                    />
                </FormControl><br />
                <FormControl variant="outlined" sx={{ mb: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-password-repeat">Password repeat</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password-repeat"
                        type={showPasswordRepeat ? 'text' : 'password'}
                        endAdornment={endAdornmentPasswordRepeat}
                        label="Password"
                    />
                </FormControl><br />
                <Button variant="contained">Login</Button>
            </Box>
        </Box>
    );
};

export default Login;