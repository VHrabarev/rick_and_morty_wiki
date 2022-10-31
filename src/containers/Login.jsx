import { connect } from "react-redux";
import Login from "../components/Login";

const LoginContainer = function() {
    return <Login />;
};

export default connect()(LoginContainer);