import { Link } from "react-router-dom";

const Header = function() {
    return (
        <>
            <h2>Header</h2>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
        </>
    );
};

export default Header;