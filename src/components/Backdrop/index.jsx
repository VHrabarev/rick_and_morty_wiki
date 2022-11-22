import { Box, Typography, CircularProgress } from "@mui/material";

const Backdrop = function() {
    const backdropHeight = window.innerHeight - 300;
    return (
        <Box component="section" sx={{ position: "relative", minHeight: backdropHeight }}>
            <Typography component="h2" className="visually-hidden">Data is loading</Typography>
            <CircularProgress color="inherit" sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        </Box>
    );
};

export default Backdrop;