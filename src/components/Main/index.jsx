import { Routes, Route } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Home from "../../containers/Home.jsx";
import Profile from "../../containers/Profile.jsx";
import Login from "../../containers/Login.jsx";
import Register from "../../containers/Register.jsx";
import Character from "../../containers/Character.jsx";
import Episod from "../../containers/Episod.jsx";
import Location from "../../containers/Location.jsx";

const Main = function() {
    return (
        <Container maxWidth="md" component="main" sx={{ pt: 4 }}>
            <Typography component="h1" className="visually-hidden">Main</Typography>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/characters/:id" element={<Character />} />
                <Route path="/episodes/:id" element={<Episod />} />
                <Route path="/locations/:id" element={<Location />} />
            </Routes>
        </Container>
    );
};

export default Main;