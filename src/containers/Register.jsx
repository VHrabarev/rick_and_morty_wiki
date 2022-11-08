import { connect } from "react-redux";
import Register from "../components/Register";
import {userFullRegistet} from "../store/reducers/authReducer.js";

const RegisterContainer = function(props) {
    const {register} = props;

    return <Register register={register} />;
};

export default connect(store => ({}), { register: userFullRegistet })(RegisterContainer);