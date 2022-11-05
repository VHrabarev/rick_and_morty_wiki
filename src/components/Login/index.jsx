import { Box, Typography, TextField, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput, Button, List, ListItem, ListItemText } from "@mui/material";
import { useState, useRef } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const Login = function(props) {
    const {login} = props;
    const email = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = useState(false);

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

    return (
        <Box component="section">
            <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign: "center" }}>Login form</Typography>
            <Box sx={{ maxWidth: 400, m: "0 auto" }}>
                <Box
                    component="form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        login({email: email.current.value, password: password.current.value});
                    }}
                >
                    <TextField label="E-mail" variant="outlined" sx={{ width: "100%", mb: 2 }} inputRef={email} autoFocus />
                    <FormControl variant="outlined" sx={{ width: "100%", mb: 2 }}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={endAdornmentPassword}
                            label="Password"
                            inputRef={password}
                        />
                    </FormControl>
                    <Button type="submit" variant="contained">Login</Button>
                </Box>
                <List>
                    <ListItem disablePadding>
                        <Link to="/password-reset">
                            <ListItemText primary="Remind password" />
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to="/register">
                            <ListItemText primary="Sign up" />
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Login;