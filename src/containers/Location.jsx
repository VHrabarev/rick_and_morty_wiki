import { connect } from "react-redux";
import Location from "../components/Location";

const LocationContainer = function() {
    return <Location />;
};

export default connect()(LocationContainer);