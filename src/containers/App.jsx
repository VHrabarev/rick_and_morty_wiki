import { connect } from "react-redux";
import App from "../components/App";
import { checkUserLoginStatus } from "../store/reducers/authReducer.js";

const AppContainer = function(props) {
    const {checkUser} = props;
    return <App checkUser={checkUser}/>
};

export default connect(store => ({}), {checkUser: checkUserLoginStatus})(AppContainer);