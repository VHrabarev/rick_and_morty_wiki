import { connect } from "react-redux";
import App from "../components/App";
import {checkUserLoginStatus} from "../store/reducers/authReducer.js";

const AppContainer = function(props) {
    const {checkUserLoginStatus} = props;
    return <App checkUserLoginStatus={checkUserLoginStatus} />
};

export default connect(store => ({}), {checkUserLoginStatus})(AppContainer);