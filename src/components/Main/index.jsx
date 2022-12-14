import { Routes, Route } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import ProtectedRoute from "../../containers/ProtectedRoute.jsx";
import Home from "../../containers/Home.jsx";
import Profile from "../../containers/Profile.jsx";
import Login from "../../containers/Login.jsx";
import Register from "../../containers/Register.jsx";
import Character from "../../containers/Character.jsx";
import Episode from "../../containers/Episode.jsx";
import Location from "../../containers/Location.jsx";

const Main = function() {
    const protectedProfile = (
        <ProtectedRoute usersFor={["user"]} redirect="/login" children={<Profile />} />
    );
    const protectedLogin = (
        <ProtectedRoute usersFor={["anon"]} redirect="/profile" children={<Login />} />
    );
    const protectedRegister = (
        <ProtectedRoute usersFor={["anon"]} redirect="/profile" children={<Register />} />
    );
    return (
        <Container maxWidth="md" component="main" sx={{ pt: 4 }}>
            <Typography component="h1" className="visually-hidden">Main</Typography>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/profile" element={protectedProfile} />
                <Route path="/login" element={protectedLogin} />
                <Route path="/register" element={protectedRegister} />
                <Route path="/characters/:id" element={<Character />} />
                <Route path="/episodes/:id" element={<Episode />} />
                <Route path="/locations/:id" element={<Location />} />
            </Routes>
        </Container>
    );
};

export default Main;