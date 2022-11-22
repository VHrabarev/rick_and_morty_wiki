import { connect } from "react-redux";
import Home from "../components/Home";
import { getAllCharacters, getAllLocations, getAllEpisodes } from "../store/reducers/promiseReducer.js";

const HomeContainer = function(props) {
    const {cards, pages, pending, getAllCharacters, getAllLocations, getAllEpisodes} = props;
    return <Home 
                cards={cards}
                pages={pages}
                pending={pending}
                getAllCharacters={getAllCharacters}
                getAllLocations={getAllLocations}
                getAllEpisodes={getAllEpisodes}/>;
};

export default connect(
    store => ({
        cards: store.promise.cards,
        pages: store.promise.pages,
        pending: store.promise.pending.getAll,
    }), { getAllCharacters, getAllLocations, getAllEpisodes }
)(HomeContainer);