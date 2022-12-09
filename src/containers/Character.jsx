import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Character from "../components/Character";
import { getCharacterById } from "../store/reducers/promiseReducer";
import Backdrop from "./Backdrop.jsx";

const CharacterContainer = function(props) {
    const {character, getCharacter, pending} = props;
    const {id} = useParams();

    useEffect(() => {
        getCharacter({id});
    }, [id]);
    return pending ? <Backdrop /> : <Character character={character} />;
};

export default connect(store => ({
    character: store.promise.character,
    pending: store.promise.pending.character,
}), { getCharacter: getCharacterById })(CharacterContainer);