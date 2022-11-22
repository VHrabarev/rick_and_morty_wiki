import { connect } from "react-redux";
import CardList from "../components/CardList";

const CardListContainer = function(props) {
    const {cards} = props;
    return <CardList cards={cards} />;
};

export default connect()(CardListContainer);