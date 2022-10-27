import { connect } from "react-redux";
import App from "../components/App";

const AppContainer = function() {
    return <App />
};

export default connect()(AppContainer);