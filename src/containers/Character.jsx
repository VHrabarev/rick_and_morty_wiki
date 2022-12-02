import { connect } from "react-redux";
import Character from "../components/Character";

const CharacterContainer = function() {
    return <Character />;
};

export default connect()(CharacterContainer);