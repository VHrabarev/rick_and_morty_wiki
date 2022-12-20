import { Box, Typography, Avatar, Button, List, ListItem, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import FirstTab from "./Tabs/FirstTab.jsx";
import SecondTab from "./Tabs/SecondTab.jsx";
import ThirdTab from "./Tabs/ThirdTab.jsx";

const Profile = function(props) {
    const {userInfo} = props;
    const [value, setValue] = useState(0);

    const headProfileWrapperStyle = { display: "flex", flexWrap: "nowrap", justifyContent: "space-between", backgroundColor: "#e7e7e7", borderRadius: 2, p: "12px 24px", mb: 2 };
    const mainContentWrapperStyle = { backgroundColor: "#e7e7e7", borderRadius: 2, p: "12px 24px" };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = {
        0: <FirstTab userInfo={userInfo} />,
        1: <SecondTab />,
        2: <ThirdTab />,
    };

    return (
        <Box component="section">
            <Typography className="visually-hidden">Profile</Typography>
            <Box sx={headProfileWrapperStyle}>
                <Avatar src={userInfo.photoURL ? userInfo.photoURL : ""} sx={{ width: "150px", height: "150px" }} alt="User avatar">
                    {userInfo.displayName ? userInfo.displayName : null}
                </Avatar>
                <List>
                    <ListItem>
                        <Button variant="contained">Change avatar</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained">Logout</Button>
                    </ListItem>
                </List>
            </Box>
            <Box sx={mainContentWrapperStyle}>
                <Tabs value={value} onChange={handleChange} aria-label="menu">
                    <Tab label="Profile info" />
                    <Tab label="My favourite" />
                    <Tab label="Else" />
                </Tabs>
                <Box sx={{ p: "12px 24px" }}>
                    {tabs[value]}
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;