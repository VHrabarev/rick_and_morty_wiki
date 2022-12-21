import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Tooltip, FormHelperText } from "@mui/material";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const FirstTab = function(props) {
    const {userInfo} = props;
    const textInputDisabledState = {
        name: true,
        email: true,
        phone: true,
    };
    const [disabled, setDisabled] = useState(textInputDisabledState);

    const handleNameDisabled = () => setDisabled({...disabled, name: !disabled.name});
    const handleEmailDisabled = () => setDisabled({...disabled, email: !disabled.email});
    const handlePhoneDisabled = () => setDisabled({...disabled, phone: !disabled.phone});
    const handleMouseDownPassword = (e) => e.preventDefault();

    const adornmentControl = function(title, onClick, onMouseDown, icon = "edit") {
        return (
            <InputAdornment position="end">
                <Tooltip title={title}>
                    <IconButton
                        aria-label={title}
                        onClick={onClick}
                        onMouseDown={onMouseDown}
                        edge="end"
                    >
                        {icon === "edit" ? <EditIcon /> : <CheckIcon />}
                    </IconButton>
                </Tooltip>
            </InputAdornment>
        );
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="User info table">
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">Name</TableCell>
                        <TableCell>
                            <FormControl variant="outlined" sx={{ width: "100%" }}>
                                <InputLabel htmlFor="name">{userInfo.displayName ? userInfo.displayName : "Name not provided"}</InputLabel>
                                <OutlinedInput
                                    id="name"
                                    type="text"
                                    endAdornment={adornmentControl("Edit name", handleNameDisabled, handleMouseDownPassword)}
                                    label={userInfo.displayName ? userInfo.displayName : "Name not provided"}
                                    disabled={disabled.name}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Email</TableCell>
                        <TableCell>
                            <FormControl variant="outlined" sx={{ width: "100%" }}>
                                <InputLabel htmlFor="email">{userInfo.email ? userInfo.email : "Email not provided"}</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    type="email"
                                    aria-describedby="email-verified"
                                    endAdornment={adornmentControl("Edit email", handleEmailDisabled, handleMouseDownPassword)}
                                    label={userInfo.email ? userInfo.email : "Email not provided"}
                                    disabled={disabled.email}
                                />
                                <FormHelperText id="email-verified">{userInfo.emailVerified ? "Verified" : "Not verified"}</FormHelperText>
                            </FormControl>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Phone</TableCell>
                        <TableCell align="right">
                            <FormControl variant="outlined" sx={{ width: "100%" }}>
                                <InputLabel htmlFor="phone">{userInfo.phoneNumber ? userInfo.phoneNumber : "Phone not provided"}</InputLabel>
                                <OutlinedInput
                                    id="phone"
                                    type="text"
                                    endAdornment={adornmentControl("Edit phone", handlePhoneDisabled, handleMouseDownPassword)}
                                    label={userInfo.phoneNumber ? userInfo.phoneNumber : "Phone not provided"}
                                    disabled={disabled.phone}
                                />
                            </FormControl>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FirstTab;