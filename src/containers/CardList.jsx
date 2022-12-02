import { connect } from "react-redux";
import CardList from "../components/CardList";

const CardListContainer = function(props) {
    const {cards, url} = props;
    return <CardList cards={cards} url={url}/>;
};

export default connect()(CardListContainer);