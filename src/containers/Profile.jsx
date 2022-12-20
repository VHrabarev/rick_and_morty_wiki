import { connect } from "react-redux";
import Profile from "../components/Profile";

const ProfileContainer = function(props) {
    const { userInfo } = props;

    return <Profile userInfo={userInfo} />
};

export default connect(store => ({ userInfo: store.auth.user.userInfo }))(ProfileContainer);