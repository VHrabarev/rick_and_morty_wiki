import { connect } from "react-redux";
import Home from "../components/Home";

const HomeContainer = function() {
    return <Home />;
};

export default connect()(HomeContainer);