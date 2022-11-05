import { connect } from "react-redux";
import Register from "../components/Register";

const RegisterContainer = function(props) {
    const {register} = props;

    return <Register register={register} />;
};

export default connect(store => ({}), { register: () => console.log("Мок") })(RegisterContainer);