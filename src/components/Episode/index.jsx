import { Box, Typography, Divider, Grid, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Episode = function(props) {
    const defaultEpisode = {
        name: "episode name",
        id: 0,
        air_date: "Episode air date",
        episode: "Episode code",
        characters: [{id: 0, name: "Character name", image: "Character image"}],
    };
    const {episode = defaultEpisode} = props;
    
    return (
        <Box component="section">
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>Episode</Typography>
            <Box sx={{ position: "relative", backgroundColor: "#e7e7e7", borderRadius: 2, p: "12px 24px", mb: 2 }}>
                <Typography variant="h5" fontWeight={700} mb={1}>{episode.name}</Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography sx={{ position: "absolute", top: "20px", right: "24px", color: "#727272", fontSize: "14px" }}>{episode.episode}</Typography>
                <Box>
                    <Typography color="#727272" fontSize={14}>Air date:</Typography>
                    {episode.air_date}
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#e7e7e7", borderRadius: 2, p: "12px 24px" }}>
                <Typography variant="h5" fontWeight={700} mb={1}>Characters</Typography>
                <Divider sx={{ mb: 1 }} />
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {episode.characters.map(character => {
                        return (
                            <Grid item key={character.id} xs={4}>
                                <Link
                                    to={`/characters/${character.id}`}
                                    className="link"
                                    style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
                                >
                                    <Avatar src={character.image} sx={{ width: 60, height: 60, mr: 1 }}>{character.name[0]}</Avatar>
                                    <Typography>{character.name}</Typography>
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default Episode;