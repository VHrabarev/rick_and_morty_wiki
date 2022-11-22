import { connect } from "react-redux";
import Backdrop from "../components/Backdrop";

const BackdropContainer = function() {
    return <Backdrop />;
};

export default connect()(BackdropContainer);