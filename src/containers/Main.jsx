import { connect } from "react-redux";
import Main from "../components/Main";

const MainContainer = function() {
    return <Main />
};

export default connect()(MainContainer);