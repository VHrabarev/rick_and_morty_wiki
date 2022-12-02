import { Box, Typography, BottomNavigation, BottomNavigationAction, Pagination } from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import RoomIcon from '@mui/icons-material/Room';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useState } from "react";
import CardList from "../../containers/CardList.jsx";
import Backdrop from "../../containers/Backdrop.jsx";
import { useEffect } from "react";

const Home = function(props) {
    const {cards, pages, pending, getAllCharacters, getAllLocations, getAllEpisodes} = props;
    const [valueNavigation, setValueNavigation] = useState('characters');
    const [page, setPage] = useState(1);
    const run = {
        characters: getAllCharacters,
        locations: getAllLocations,
        episodes: getAllEpisodes,
    };

    const handleChangePage = (e, value) => {
        setPage(value);
    };
    const handleChangeNavigation = (e, newValue) => {
        setValueNavigation(newValue);
        setPage(1);
    };

    useEffect(() => {
        if(typeof(run[valueNavigation]) === "function") {
            run[valueNavigation]({page});
        };
    }, [valueNavigation, page]);

    return (
        <Box component="section">
            <Typography component="h2" className="visually-hidden">Home</Typography>
            <BottomNavigation value={valueNavigation} onChange={handleChangeNavigation} sx={{ mb: 2 }}>
                <BottomNavigationAction label="Characters" value="characters" icon={<AccessibilityNewIcon />} />
                <BottomNavigationAction label="Locations" value="locations" icon={<RoomIcon />} />
                <BottomNavigationAction label="Episodes" value="episodes" icon={<PhotoLibraryIcon />} />
            </BottomNavigation>
            {pending ? <Backdrop /> : <CardList cards={cards} url={valueNavigation} />}
            <Pagination count={pages} page={page} sx={{ display: "flex", justifyContent: "center" }} onChange={handleChangePage}/>
        </Box>
    );
};

export default Home;