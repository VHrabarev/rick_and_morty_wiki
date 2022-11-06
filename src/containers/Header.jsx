import { connect } from "react-redux";
import Header from "../components/Header";
import { PAGES, SETTINGS } from "../api/constans";
import { userLogout } from "../store/reducers/authReducer.js";

const HeaderContainer = function(props) {
    let {auth, logout} = props;
    
    return <Header auth={auth} pages={PAGES} settings={SETTINGS} logout={logout} />
};

export default connect(store => ({auth: store.auth.user.authStatus}), {logout: userLogout})(HeaderContainer);