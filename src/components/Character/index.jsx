import { Box, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Character = function(props) {
    const defaultCharacter = {
        image: "",
        name: "character name",
        status: "character status",
        species: "character species",
        gender: "character gender",
        location: {
            id: 0,
            name: "location name",
        },
        origin: {
            id: 0,
            name: "origin name",
        },
    };
    const {character = defaultCharacter} = props;

    const checkCharacterStatus = function(status) {
        switch(status) {
            case "Alive": return "#38f138";
            case "Dead": return "red";
            case "unknown": return "grey";
            default: return "purple";
        };
    };

    return (
        <Box component="section">
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>Character</Typography>
            <Box sx={{ display: "flex", flexWrap: "nowrap" , backgroundColor: "#e7e7e7", borderRadius: 2 }}>
                <img
                    src={character.image}
                    alt={`${character.name}'s portrait`}
                    loading="lazy"
                    style={{ minHeight: 300, height: "100%", verticalAlign: "bottom", borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}
                />
                <Box sx={{ width: "100%", p: "12px 24px", position: "relative" }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>{character.name}</Typography>
                    <Divider sx={{ mt: 1, mb: 1 }} />
                    <Typography
                        sx={{
                            p: "2px 8px",
                            backgroundColor: checkCharacterStatus(character.status),
                            borderRadius: 3,
                            position: "absolute",
                            top: "12px",
                            right: "24px",
                        }}
                    >
                        {character.status}
                    </Typography>
                    <Typography mb={1}>{`${character.species} - ${character.gender}`}</Typography>
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "rgba(0, 0, 0, 0.6)" }}>Last known location:</Typography>
                        <Link
                            to={`/locations/${character.location?.id}`}
                            className="link"
                            style={{ fontSize: "18px", fontWeight: 500 }}
                        >
                            {character.location?.name}
                        </Link>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "rgba(0, 0, 0, 0.6)" }}>First seen in:</Typography>
                        <Link
                            to={`/locations/${character.origin?.id}`}
                            className="link"
                            style={{ fontSize: "18px", fontWeight: 500 }}
                        >
                            {character.origin?.name}
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Character;