import { connect } from "react-redux";
import Header from "../components/Header";

const HeaderContainer = function() {
    return <Header />
};

export default connect()(HeaderContainer);