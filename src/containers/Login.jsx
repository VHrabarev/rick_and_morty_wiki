import { connect } from "react-redux";
import Login from "../components/Login";
import { userLogin } from "../store/actions/authActions.js";

const LoginContainer = function(props) {
    const {login} = props;
    return <Login login={login}/>;
};

export default connect(store => ({}), {login: userLogin})(LoginContainer);