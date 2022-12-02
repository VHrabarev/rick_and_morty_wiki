import { connect } from "react-redux";
import Episod from "../components/Episod";

const EpisodContainer = function() {
    return <Episod />;
};

export default connect()(EpisodContainer);