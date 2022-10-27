import { Routes, Route } from "react-router-dom";
import Home from "../../containers/Home.jsx";
import Profile from "../../containers/Profile.jsx";

const Main = function() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default Main;