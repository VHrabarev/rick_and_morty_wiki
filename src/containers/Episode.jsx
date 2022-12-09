import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Episode from "../components/Episode";
import { getEpisodeById } from "../store/reducers/promiseReducer";
import Backdrop from "./Backdrop.jsx";

const EpisodeContainer = function(props) {
    const {episode, getEpisode, pending} = props;
    const {id} = useParams();

    useEffect(() => {
        getEpisode({id});
    }, [id]);

    return pending ? <Backdrop /> : <Episode episode={episode} />;
};

export default connect(store => ({ 
    episode: store.promise.episode,
    pending: store.promise.pending.episode,
 }),{ getEpisode: getEpisodeById })(EpisodeContainer);