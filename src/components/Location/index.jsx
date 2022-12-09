import { Box, Typography } from "@mui/material";

const Location = function(props) {
    const defaultLocation = {
        name: "location name",
    };
    const {location = defaultLocation} = props;

    return (
        <Box component="section">
            <Typography component="h2">Location</Typography>
            <Typography>{location.name}</Typography>
        </Box>
    );
};

export default Location;