import { connect } from "react-redux";
import Profile from "../components/Profile";

const ProfileContainer = function() {
    return <Profile />
};

export default connect()(ProfileContainer);