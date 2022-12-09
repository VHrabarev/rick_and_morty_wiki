import { Box, Typography } from "@mui/material";

const Episode = function(props) {
    const defaultEpisode = {
        name: "episode name"
    };
    const {episode = defaultEpisode} = props;
    
    return (
        <Box component="section">
            <Typography component="h2">Episode</Typography>
            <Typography>{episode.name}</Typography>
        </Box>
    );
};

export default Episode;