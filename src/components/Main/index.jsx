import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "../../containers/Home.jsx";
import Profile from "../../containers/Profile.jsx";
import Login from "../../containers/Login.jsx";

const Main = function() {
    return (
        <Container maxWidth="md" component="main" sx={{ pt: 4 }}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Container>
    );
};

export default Main;